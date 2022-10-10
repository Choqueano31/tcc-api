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
          res.send('Wrong username or password.');
        }
      } else {
        res.send('Wrong username or password.');
      }
    } catch (error) {
      // console.log(error);
      res.status(500).send('Internal Server error Occured');
    }
  }
}

export default new UserMongoController();
