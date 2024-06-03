const fsPromise = require("fs").promises;

const path = require("path");

const filesOps = async() => {
    try {
      const data = await fsPromise.readFile(path.join(__dirname, 'read.txt'), {encoding: 'utf8'})
      const datawrite = await fsPromise.writeFile(path.join(__dirname, 'write.txt'),'Tempor nisi sunt sunt consectetur voluptate')
      const dataAppend = await fsPromise.appendFile(path.join(__dirname, 'write.txt'),'\n\nAute irure sunt laborum sit dolore mollit. ')
      const renamedfile = await fsPromise.rename(path.join(__dirname, 'write.txt') ,path.join(__dirname, 'renamedFile.txt'))
      


      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  filesOps()



  