export const profile = {
  name: "Edson Rodrigo Damasceno Lopes",
  role: "Engenheiro de Software & Arquiteto",
  shortDescription: "Projetando arquiteturas de software escaláveis e seguras com integração devops e foco na eficiência.",
  aboutText: [
    "Possuo 28 anos e sou um profissional guiado por desafios técnicos de alto impacto, atuando ativamente na evolução e desenho de sistemas que exigem resiliência e alta disponibilidade.",
    "Minha abordagem é orientada ao System Design e práticas de engenharia de software (DDD, Clean Architecture, SOLID). Busco decisões arquiteturais sólidas, de forma não pretensiosa, para garantir a sustentabilidade do código e a fluidez do time.",
    "Adoto continuamente processos de DevOps (CI/CD, Docker, Kubernetes) e a Inteligência Artificial como parceira no meu fluxo de pensamento e desenvolvimento. Meu objetivo é sempre unificar a qualidade de software a entregas de valor contínuo aos usuários e às regras de negócio."
  ],
  personalInfo: {
    Idade: 28,
    Base: "Sistemas Distribuídos & Cloud",
    Foco: "Arquitetura",
  },
  stats: [
    { value: "Sênior", label: "System Design" },
    { value: "Cloud", label: "AWS & DevOps" },
    { value: "Data", label: "Event-Driven & Kafka" },
    { value: "Agile", label: "Scrum & Kanban" }
  ],
  asiCodeDescription: [
    "Acredito no poder da Arquitetura Limpa e no código livre de atritos. Minha marca não dita apenas como organizar linhas de instrução, mas também como observar as camadas de um software como reflexos de soluções de vida real.",
    "Trabalhando incansavelmente em Integrações, Mensageria (Kafka/RabbitMQ) e Monitoramento Sistêmico (Datadog/Elastic), defendo que as aplicações escaláveis devem ser silenciosas e incrivelmente otimizadas."
  ],
  contacts: {
    email: "edsonrodrigo11111@gmail.com",
    phone: "+55 (91) 99169-3284",
    linkedin: "https://www.linkedin.com/in/edson-rodrigo-lopes/",
    github: "https://github.com/edsonrdl",
    instagram: "https://www.instagram.com/_edsonrd_lopes/",
    instagramAsi: "https://www.instagram.com/_asi_code/",
    whatsapp: "https://wa.me/5591991693284?text=Olá%2C%20Edson%2C%20tudo%20bem%3F"
  }
};

export const history = {
  experience: [
    {
      company: "BRQ Digital Solutions / Itaú Unibanco",
      period: "Agosto 2025 - Presente",
      role: "Desenvolvedor & Líder Técnico em Arquitetura",
      description: "Atuação estratégica nas plataformas de Catálogo e Ofertas do banco privado. Sustentação de ecossistemas Serverless (AWS Lambda, SNS, SQS, Terraform) e mensageria de transações via MSK Kafka.",
      bullets: [
        "Design de Microserviços e migração usando Strangler Fig (Monolítico para Distribuído).",
        "Implementação de Domain-Driven Design (DDD), Clean Architecture e CQRS.",
        "DevOps: Cloud 100% como Código utilizando Terraform (IaC) com Datadog.",
        "Liderança Técnica com mentorias e revisões arquiteturais focadas em code-quality."
      ]
    },
    {
      company: "FADESP / SEFA-PA",
      period: "Fevereiro 2025 - Presente",
      role: "Engenheiro Backend e Projetista de Microserviços",
      description: "Modernização das plataformas digitais para a área Fiscal e Tributária do Estado do Pará. Otimização de sistemas críticos no suporte de arrecadação.",
      bullets: [
        "Modernização gradual para microserviços em Kubernetes e OpenShift.",
        "Implementação de filas de assincronia e mensageria de impostos com RabbitMQ e Kafka.",
        "Operação CI/CD automatizado com GitLab, Jenkins, ArgoCD e Harbor.",
        "Garantia de escalamento com Java 17, Spring e métricas no stack ELK."
      ]
    },
    {
      company: "Máxima Segurança",
      period: "Abril 2024 - Junho 2025",
      role: "Arquiteto de Software Corporativo",
      description: "Prestação de serviços de desenvolvimento e arquitetura para um sistema base on-premises em Proxmox. Levantamento de requisitos até o design macro.",
      bullets: [
        "Modelagem física conceitual e definição completa da topologia dos serviços on-premise.",
        "Separação de contexto estrita (DDD) aliada à modelagem ágil com RabbitMQ + PostgreSQL + MongoDB.",
        "Responsável por esteiras de Deploy, CI/CD Pipeline e gestão conteinerizada usando Docker."
      ]
    },
    {
      company: "Projetos Pessoais & Freelancers",
      period: "Contínuo",
      role: "Full Stack Engineer & Tech Discovery",
      description: "P&D voltado ao desenvolvimento de chatbots de alta integração (API Meta), e plataformas de gestão Web/Mobile.",
      bullets: [
        "Adoção intensa de recursos de IA para produtividade de ponta a ponta.",
        "Desenvolvimentos de frameworks com Angular 18, React Native e Spring Boot."
      ]
    }
  ],
  education: [
    "Bacharelado em Sistemas de Informação - Universidade Estácio de Sá, Campus IESAM (Belém - PA)",
    "Foco avançado em Data Structures, Padrões SOLID e Cloud Computing extracurriculares."
  ]
};

export const projects = [
  {
    id: "chatbot",
    type: "Arquitetura e Integração",
    title: "Chatbot WhatsApp com Dashboards",
    description: "Sistema focado em processamento natural assistivo para captação de Vendas conectado através de microserviços Spring e MySQL.",
    status: "Operacional",
    images: [],
    techs: ["Java", "Spring Boot", "Webhooks", "API Restful"],
    github: "https://github.com/edsonrdl/envio-de-mensagens-simples-whatsapp-api",
    preview: null
  },
  {
    id: "crud-clean",
    type: "System Design",
    title: "Clean Architecture em Cadastro Cliente",
    description: "Laboratório de engenharia profunda abordando a segregação de dependências e Clean Architecture apoiado com uso de cache (Redis) e contêineres.",
    status: "Concluído",
    images: [],
    techs: ["Java", "Docker", "Redis", "DDD"],
    github: "https://github.com/edsonrdl/project-crud-clean-architecture-patterns-dao",
    preview: null
  },
  {
    id: "cdc-kafka",
    type: "Engenharia de Dados",
    title: "Data Streaming com Kafka CDC",
    description: "Aplicação focada no ecossistema Kafka e Debezium (Kafka Connect) visando propagar fluxos de dados de bancos isolados em tempo real na nuvem.",
    status: "Back-end Interno",
    images: [],
    techs: ["Apache Kafka", "Docker", "MySQL", "PostgreSQL"],
    github: null,
    preview: null
  },
  {
    id: "order-sys",
    type: "Mensageria",
    title: "Microsystem Processador de Transações",
    description: "Estudo de caso massivo sobre resiliência a falhas empregando filas distribuídas e roteamentos através do middleware RabbitMQ.",
    status: "Em evolução",
    images: [],
    techs: [".NET Core", "Node.js", "RabbitMQ", "MongoDB"],
    github: "https://github.com/edsonrdl/order-processing-system.git",
    preview: null
  },
  {
    id: "sistema-gestao",
    type: "Full Stack ERP",
    title: "Plataforma de Gestão SPA",
    description: "Desenvolvimento de frontend web com SPA em Angular 18 alimentado via APIs REST seguras providas por Spring Boot, PostgreSQL e Cache em redis resolvendo gargalos de request.",
    status: "Suporte",
    images: [],
    techs: ["Angular 18", "Spring Boot", "PostgreSQL", "Redis"],
    github: null,
    preview: null
  }
];

export const skillsList = [
  "Java 8 às 21 (EE)", "Spring Boot & Framework", "C# & .NET Core", 
  "Clean Architecture", "Arquitetura Hexagonal", "System Design & DDD", "SOLID & DRY", 
  "Microserviços & Monólitos", "RabbitMQ", "Kafka & Kafka Connect", 
  "AWS (Lambda, Glue, SNS, SQS, MSK)", "Terraform (IaC)", "Docker & Kubernetes", 
  "Jenkins, GitLab CI/CD, ArgoCD", "Datadog, Grafana, ELK Stack", 
  "SQL Server, PostgreSQL, MySQL", "DocumentDB & MongoDB", "Redis & Cache", 
  "Desenvolvimento Web (Angular 18, AngularJS, React Native)"
];
