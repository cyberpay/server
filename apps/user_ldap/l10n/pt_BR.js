OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Falha ao limpar os mapeamentos.",
    "Failed to delete the server configuration" : "Falha ao deletar a configuração do servidor",
    "The configuration is valid and the connection could be established!" : "A configuração é válida e a conexão foi estabelecida!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "A configuração é válida, mas o Bind falhou. Confira as configurações do servidor e as credenciais.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Configuração inválida. Por favor, dê uma olhada nos logs para mais detalhes.",
    "No action specified" : "Nenhuma ação especificada",
    "No configuration specified" : "Nenhuma configuração especificada",
    "No data specified" : "Não há dados especificados",
    " Could not set configuration %s" : "Não foi possível definir a configuração %s",
    "Action does not exist" : "A ação não existe",
    "Configuration incorrect" : "Configuração incorreta",
    "Configuration incomplete" : "Configuração incompleta",
    "Configuration OK" : "Configuração OK",
    "Select groups" : "Selecionar grupos",
    "Select object classes" : "Selecione classes de objetos",
    "Please check the credentials, they seem to be wrong." : "Por favor verifique as credenciais, elas parecem estar erradas.",
    "Please specify the port, it could not be auto-detected." : "Por favor especifique uma porta, ela não pode ser detectada automaticamente.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "A Base DN não pode ser detectada automaticamente, por favor revise as credenciais, host e porta.",
    "Could not detect Base DN, please enter it manually." : "Não foi possível detectar a Base DN, por favor entre manualmente.",
    "{nthServer}. Server" : "Servidor {nthServer}.",
    "No object found in the given Base DN. Please revise." : "Nenhum objeto encontrado ba Base DN informada. Por favor revise.",
    "More then 1.000 directory entries available." : "Mais de 1.000 entradas de diretórios disponíveis.",
    " entries available within the provided Base DN" : "entradas disponíveis na Base DN disponibilizada",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Um erro ocorreu. Por favor verifique a Base DN, e também a conexção e credenciais.",
    "Do you really want to delete the current Server Configuration?" : "Você quer realmente deletar as atuais Configurações de Servidor?",
    "Confirm Deletion" : "Confirmar Exclusão",
    "Mappings cleared successfully!" : "Limpeza do mapeamento feita com sucesso!",
    "Error while clearing the mappings." : "Erro enquanto limpava os mapeamentos.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Falha ao gravar. Por favor, verifique se o banco de dados está em operação. Atualize antes de continuar.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Mudar o modo irá permitir consultas LDAP automáticas. Dependendo do tamanho do LDAP isso pode demorar um pouco. Você ainda quer mudar o modo?",
    "Mode switch" : "Troca de modo",
    "Select attributes" : "Selecione os atributos",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Usuário não encontrado. Por favor verifique os seus atributos de login e nome de usuário. Filtro eficaz (para copiar-e-colar para validação de linha de comando): <br/>",
    "User found and settings verified." : "Usuário encontrado e configurações verificadas.",
    "Settings verified, but one user found. Only the first will be able to login. Consider a more narrow filter." : "Configurações verificadas, mas um usuário encontrado. Apenas o primeiro será capaz de fazer login. Considere um filtro mais apurado.",
    "An unspecified error occurred. Please check the settings and the log." : "SetAn Ocorreu um erro não especificado. Por favor, verifique as configurações e os log.tings verificadas, mas um usuário encontrado. Apenas o primeiro será capaz de login. Considere um filtro mais apurado.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "O filtro de pesquisa é inválido, provavelmente devido a questões de sintaxe, como número ímpar de colchetes abertos e fechados. Por favor, revise.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Um erro de conexão para LDAP / AD ocorreu, por favor, verifique host, a porta e as credenciais.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "O espaço reservado %uid está faltando. Ele será substituído pelo nome de login ao consultar LDAP / AD.",
    "Please provide a login name to test against" : "Por favor, forneça um nome de login para testar",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "A caixa do grupo foi desativada, porque o servidor LDAP / AD não suporta memberOf.",
    "_%s group found_::_%s groups found_" : ["grupo% s encontrado","grupos% s encontrado"],
    "_%s user found_::_%s users found_" : ["usuário %s encontrado","usuários %s encontrados"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Não foi possível detectar o nome de exibição do atributo do usuário. Por favor, indique-o você mesmo em configurações avançadas do LDAP.",
    "Could not find the desired feature" : "Não foi possível encontrar a função desejada",
    "Invalid Host" : "Host Inválido",
    "Server" : "Servidor",
    "Users" : "Usuários",
    "Login Attributes" : "Atributos de Acesso",
    "Groups" : "Grupos",
    "Test Configuration" : "Teste de Configuração",
    "Help" : "Ajuda",
    "Groups meeting these criteria are available in %s:" : "Grupos que satisfazem estes critérios estão disponíveis em %s:",
    "Only these object classes:" : "Apenas essas classes de objetos:",
    "Only from these groups:" : "Somente a partir desses grupos:",
    "Search groups" : "Procurar grupos",
    "Available groups" : "Grupos disponíveis",
    "Selected groups" : "Grupos selecionados",
    "Edit LDAP Query" : "Editar consulta LDAP",
    "LDAP Filter:" : "Filtro LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "O filtro especifica quais grupos LDAP devem ter acesso à instância do %s.",
    "Test Filter" : "Filtro Teste",
    "Verify settings and count groups" : "Verificar as configurações e grupos de conta",
    "When logging in, %s will find the user based on the following attributes:" : "Ao entrar, %s vai encontrar o usuário com base nos seguintes atributos:",
    "LDAP / AD Username:" : "Nome do usuário LDAP / AD:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Permitir o login contra o nome de usuário LDAP / AD, que é ou uid ou samaccountname e será detectado.",
    "LDAP / AD Email Address:" : "Endereço de e-mail  LDAP / AD:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Permite o login contra um atributo de e-mail. E-mail e endereço primário de e-mail serão permitidos.",
    "Other Attributes:" : "Outros Atributos:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Define o filtro a ser aplicado, quando o login for feito. %%uid substitui o nome do usuário na ação de login. Exemplo: \"uid=%%uid\"",
    "Test Loginname" : "Teste nome de Login",
    "Verify settings" : "Verificar configurações",
    "1. Server" : "1. Servidor",
    "%s. Server:" : "%s. Servidor:",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Você pode omitir o protocolo, exceto quando requerer SSL. Então inicie com ldaps://",
    "Port" : "Porta",
    "Detect Port" : "Detectar Porta",
    "User DN" : "DN Usuário",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "O DN do cliente usuário com qual a ligação deverá ser feita, ex. uid=agent,dc=example,dc=com. Para acesso anônimo, deixe DN e Senha vazios.",
    "Password" : "Senha",
    "For anonymous access, leave DN and Password empty." : "Para acesso anônimo, deixe DN e Senha vazios.",
    "One Base DN per line" : "Uma base DN por linha",
    "You can specify Base DN for users and groups in the Advanced tab" : "Você pode especificar DN Base para usuários e grupos na guia Avançada",
    "Detect Base DN" : "Detectar Base DN",
    "Test Base DN" : "Teste Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita pedidos LDAP automáticos. Melhor para configurações maiores, mas requer algum conhecimento LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Inserir manualmente filtros LDAP (recomendado para grandes diretórios)",
    "Limit %s access to users meeting these criteria:" : "Limitar o acesso %s para usuários que satisfazem esses critérios:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "As classes de objetos mais comuns para os usuários são organizationalPerson, pessoa, usuário e inetOrgPerson. Se você não tem certeza de qual classe de objeto selecionar, por favor, consulte o seu administrador do diretório.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "O filtro especifica quais usuários LDAP devem ter acesso à instância do %s.",
    "Verify settings and count users" : "Verificar configurações e contas de usuários",
    "Saving" : "Salvando",
    "Back" : "Voltar",
    "Continue" : "Continuar",
    "LDAP" : "LDAP",
    "Expert" : "Especialista",
    "Advanced" : "Avançado",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Aviso:</b> Os aplicativos user_ldap e user_webdavauth são incompatíveis. Você pode experimentar comportamento inesperado. Por favor, peça ao seu administrador do sistema para desabilitar um deles.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Aviso:</b> O módulo PHP LDAP não está instalado, o backend não funcionará. Por favor, peça ao seu administrador do sistema para instalá-lo.",
    "Connection Settings" : "Configurações de Conexão",
    "Configuration Active" : "Configuração Ativa",
    "When unchecked, this configuration will be skipped." : "Quando não marcada, esta configuração será ignorada.",
    "Backup (Replica) Host" : "Host de Backup (Réplica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Defina um servidor de backup opcional. Ele deverá ser uma réplica do servidor LDAP/AD principal.",
    "Backup (Replica) Port" : "Porta do Backup (Réplica)",
    "Disable Main Server" : "Desativar Servidor Principal",
    "Only connect to the replica server." : "Conectar-se somente ao servidor de réplica.",
    "Case insensitive LDAP server (Windows)" : "Servidor LDAP(Windows) não distigue maiúscula de minúscula",
    "Turn off SSL certificate validation." : "Desligar validação de certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Não recomendado, use-o somente para teste! Se a conexão só funciona com esta opção, importar o certificado SSL do servidor LDAP em seu servidor %s.",
    "Cache Time-To-Live" : "Cache Time-To-Live",
    "in seconds. A change empties the cache." : "em segundos. Uma mudança esvaziará o cache.",
    "Directory Settings" : "Configurações de Diretório",
    "User Display Name Field" : "Campo Nome de Exibição de Usuário",
    "The LDAP attribute to use to generate the user's display name." : "O atributo LDAP para usar para gerar o nome de exibição do usuário.",
    "Base User Tree" : "Árvore de Usuário Base",
    "One User Base DN per line" : "Um usuário-base DN por linha",
    "User Search Attributes" : "Atributos de Busca de Usuário",
    "Optional; one attribute per line" : "Opcional; um atributo por linha",
    "Group Display Name Field" : "Campo Nome de Exibição de Grupo",
    "The LDAP attribute to use to generate the groups's display name." : "O atributo LDAP para usar para gerar o nome de apresentação do grupo.",
    "Base Group Tree" : "Árvore de Grupo Base",
    "One Group Base DN per line" : "Um grupo-base DN por linha",
    "Group Search Attributes" : "Atributos de Busca de Grupo",
    "Group-Member association" : "Associação Grupo-Membro",
    "Nested Groups" : "Grupos Aninhados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Quando habilitado, os grupos que contêm os grupos são suportados. (Só funciona se o atributo de membro de grupo contém DNs.)",
    "Paging chunksize" : "Bloco de paginação",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Tamanho do bloco usado para pesquisas LDAP paginados que podem retornar resultados volumosos como usuário ou grupo de enumeração. (Defini-lo 0 desativa paginada pesquisas LDAP nessas situações.)",
    "Special Attributes" : "Atributos Especiais",
    "Quota Field" : "Campo de Cota",
    "Quota Default" : "Cota Padrão",
    "in bytes" : "em bytes",
    "Email Field" : "Campo de Email",
    "User Home Folder Naming Rule" : "Regra para Nome da Pasta Pessoal do Usuário",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Deixe vazio para nome de usuário (padrão). Caso contrário, especifique um atributo LDAP/AD.",
    "Internal Username" : "Nome de usuário interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Por padrão, o nome de usuário interno será criado a partir do atributo UUID. Ele garante que o nome de usuário é único e que caracteres não precisam ser convertidos. O nome de usuário interno tem a restrição de que apenas estes caracteres são permitidos: [a-zA-Z0-9_.@- ]. Outros caracteres são substituídos por seus correspondentes em ASCII ou simplesmente serão omitidos. Em caso de colisão um número será adicionado/aumentado. O nome de usuário interno é usado para identificar um usuário internamente. É também o nome padrão da pasta \"home\" do usuário. É também parte de URLs remotas, por exemplo, para todos as instâncias *DAV. Com esta definição, o comportamento padrão pode ser sobrescrito. Para alcançar um comportamento semelhante ao de antes do ownCloud 5, forneça o atributo do nome de exibição do usuário no campo seguinte. Deixe-o vazio para o comportamento padrão. As alterações terão efeito apenas para usuários LDAP recém mapeados (adicionados).",
    "Internal Username Attribute:" : "Atributo Interno de Nome de Usuário:",
    "Override UUID detection" : "Substituir detecção UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por padrão, o atributo UUID é detectado automaticamente. O atributo UUID é usado para identificar, sem dúvidas, os usuários e grupos LDAP. Além disso, o nome de usuário interno será criado com base no UUID, se não especificado acima. Você pode substituir a configuração e passar um atributo de sua escolha. Você deve certificar-se de que o atributo de sua escolha pode ser lido tanto para usuários como para grupos, e que seja único. Deixe-o vazio para o comportamento padrão. As alterações terão efeito apenas para usuários e grupos LDAP recém mapeados (adicionados).",
    "UUID Attribute for Users:" : "UUID Atributos para Usuários:",
    "UUID Attribute for Groups:" : "UUID Atributos para Grupos:",
    "Username-LDAP User Mapping" : "Usuário-LDAP Mapeamento de Usuário",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Nomes de usuários são usados para armazenar e atribuir dados (meta). A fim de identificar e reconhecer precisamente usuários, cada usuário LDAP terá um nome de usuário interno. Isso requer um mapeamento de nome de usuário para usuário LDAP. O nome de usuário criado é mapeado para o UUID do usuário LDAP. Além disso, o DN é armazenado em cache, assim como para reduzir a interação LDAP, mas não é usado para identificação. Se o DN muda, as mudanças serão encontrados. O nome de usuário interno é usado por toda parte. Limpando os mapeamentos terá sobras em todos os lugares. Limpando os mapeamentos não é a configuração sensível, que afeta todas as configurações LDAP! Nunca limpar os mapeamentos em um ambiente de produção, somente em um teste ou estágio experimental.",
    "Clear Username-LDAP User Mapping" : "Limpar Mapeamento de Usuário Nome de Usuário-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Limpar NomedoGrupo-LDAP Mapeamento do Grupo"
},
"nplurals=2; plural=(n > 1);");
