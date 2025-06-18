// Importa os módulos necessários
import express from 'express'; // Framework web para Node.js
import dotenv from 'dotenv'; // Carrega variáveis de ambiente do arquivo .env
import mustache from 'mustache-express'; // Motor de template Mustache
import path from 'path'; // Módulo para manipulação de caminhos de arquivos
import router from './routes/index';



// Carrega as variáveis do arquivo .env para process.env
dotenv.config();



// Cria uma instância do servidor Express
const server = express();

// Conecta o Mustache ao Express para que ele saiba como renderizar .mustache
server.engine('mustache', mustache());

// Define o Mustache como motor de template padrão
server.set('view engine', 'mustache');

// Define o diretório onde ficam os arquivos de template (.mustache)
// Garante o caminho correto usando __dirname
server.set('views', path.join(__dirname, 'views')); // <-- certifique-se de criar essa pasta



server.use(router)
server.use((req, res) => {

    res.send('Pagina não encontrada')
})

// Define a pasta pública de arquivos estáticos (ex: CSS, JS, imagens)
// O caminho relativo é para a pasta "public", que está um nível acima
server.use(express.static(path.join(__dirname, '../public')));

// Inicia o servidor escutando na porta definida no arquivo .env
server.listen(process.env.PORT)
