import { ICredential } from "../../types/credential";
import { encryptPassword, comparePassword } from "../../utils";
import { credentials } from "../../db";

async function generateCredential({username, password} : ICredential) : Promise<number | undefined> {
  try {
    const hash : string = encryptPassword(password);
  const id: number = credentials.length + 1;
  const credential: ICredential = { id, username, password: hash};
  credentials.push(credential);
  return credential.id;
  } catch (error : any) {
    throw new Error(error);
    
  }
}

async function checkCredential({username, password} : ICredential) : Promise<number | undefined> {
  try {
    const credential = credentials.find(cred => cred.username === username);
  if (!credential) throw "Usuario no encontrado";
  if (comparePassword(password, credential.password)) {
    return credential.id;
  }
  } catch (error : any) {
    throw new Error(error);
    
  }
}

export { generateCredential, checkCredential };