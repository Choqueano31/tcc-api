import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../schemas/User';
import auth from '../../config/auth';

const saltRounds = 10;
class UserMongoController {
  async store(req, res) {
    // console.log(req.body);
    try {
      const hashedPwd = await bcrypt.hash(req.body.senha, saltRounds);
      const insertResult = await User.create({
        usuario: req.body.usuario,
        senha: hashedPwd,
      });
      res.send(insertResult);
    } catch (error) {
      //  console.log(error);
      res.status(500).send('Internal Server error Occured');
    }
  }

  async show(req, res) {
    try {
      const response = await User.find({}, 'usuario');
      return res.json(response);
    } catch (error) {
      return res.json({ message: 'Ocorreu algum erro' });
    }
  }

  async update(req, res) {
    const userExists = await User.findOne({
      _id: req.params.id,
    });
    if (userExists) {
      const dados = req.body;
      if (req.body.senha === '') {
        await userExists.update({ $set: { usuario: dados.usuario } });
        return res.status(200).json({ message: 'atualizado com sucesso' });
      }

      dados.senha = await bcrypt.hash(req.body.senha, saltRounds);
      await userExists.update({ $set: dados });
      return res.status(200).json({ message: 'atualizado com sucesso' });
    }
    return res.status(400).json({ message: 'ususario nao encontrado' });
  }

  async delete(req, res) {
    const userExist = await User.deleteOne({ _id: req.params.id });
    if (userExist) {
      return res.json({ message: 'usuário exlcuido com sucesso' });
    }
    return res
      .status(400)
      .json({ message: 'nao foi possivel excluir, tente novamente' });
  }

  async session(req, res) {
    try {
      const user = await User.findOne({ usuario: req.body.usuario });
      //  console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.senha, user.senha);
        if (cmp) {
          const { usuario } = user;
          const token = jwt.sign({ usuario }, auth.secret, {
            expiresIn: auth.expiresIn,
          });
          //   ..... further code to maintain authentication like jwt or sessions
          res.status(200).json({ usuario, token });
        } else {
          res.status(400).json('usuario ou senha incorretos');
        }
      } else {
        res.status(400).json('usuario ou senha incorretos');
      }
    } catch (error) {
      // console.log(error);
      res.status(500).send('Internal Server error Occured');
    }
  }
}

export default new UserMongoController();
