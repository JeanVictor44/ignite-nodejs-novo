**RF -> REQUISITOS FUNCIONAIS -> FUNCIONALIDADES**
**RNF -> REQUISITOS NÃO FUNCIONAIS -> NÃO ESTÁ LIGADO A REGRA DE NEGÓCIO EX: BANCO DE DADOS, VELOCIDADE DE CARREGAMENTO**

**RN -> REGRA DE NEGÓCIO-> DIRETRIZES ou CONDIÇÕES que uma organização ou empresa estabelece para orientar operações, processos e decisões em cenários específicos**

# Cadastro de carro
**Requisito funcional**
- Deve ser possível cadastrar um carro**
- Deve ser possível listar todas as categorias**

**Regras de negócio**
- Não deve ser possível cadastrar carros com a mesma placa
- Não deve ser possível alterar a placa de um carro cadastrado
- Não deve ser possível alterar a marca de um carro
- Todo carro cadastrado por padrão estará disponível
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Listagem de carros

**Requisito funcional**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro


**Regras de negócio**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Requisito funcional**
- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**Regras de negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imagens do carro

**Requisito funcional**
- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros

**Requisito não funcional**
- Utilizar o multer para upload de arquivos

**Regras de negócio**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**Requisito funcional**
- Deve ser possível cadastrar um aluguel

**Requisito não funcional**

**Regras de negócio**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro
