var dictionary, set_lang;
$(function () {

    // Language dictionary
    dictionary = {
        "english": {
            "_hi-hello":"Hi, ",
            "_menu-contact": "Contact Us",
            "_menu-help": "Instructions",
            "_menu-examples": "Examples",
            "_menu-docs": "Publications",
            "_menu-movetop": "Top",
            "_menu-account": "Account",
            "_main-title_h1": "In just One App:",
            "_main-title_p1": "All circuit analysis methods!",
            "_main-body_h1": "Start your simulation below.",
            "_main-body_p1": "This circuit analysis app provides a Step-by-Step solution for electric circuits, using just a Netlist file. It's possible to submit a second file containing an image of the circuit.",
            "_main-body_p2": "Please upload your files and choose the desired circuit analysis method.",
            "_main-upload_in": "Upload files here",
            "_btn_mtn_p1": "Node Voltage",
            "_btn_mtn_p2": "Method",
            "_btn_mcr_p1": "Branch Current",
            "_btn_mcr_p2": "Method",
            "_btn_mcm_p1": "Loop Current",
            "_btn_mcm_p2": "Method",
            "_btn-edit-acc":"Edit Profile",
            "_sect_instruct": "Instructions",
            "_sect_examples": "Example circuits",
            "_sect_contact": "Contact Us",
            "_instr-btn-next": "Next Step",
            "_instr-btn-previous": "Previous Step",
            "_instr-1":'In QUCS, label every Node with an upper case using the "Name" component and place the reference Node using "Ground" symbol.',
            "_instr-2":'Insert an appropriate simulation controller and simulate the circuit. Afterwards, click "Show Last Netlist" or press F6 to prompt the Netlist.',
            "_instr-3":'Save the netlist using the "Save as" button or select all the text and save it directly to a text file.',
            "_instr-4":'If you pressed the "Save as" button, choose the "Plain Text" format to save the file.',
            "_instr-5":'Upload the text file to the app along with the circuit image (optional) and pick an analysis method.',
            "_instr-video":'Demonstration Video',
            "_examples_p1": "Try our ready-to-use examples with a single click!",
            "_contact_p1": "For questions about U=RIsolve App, we will be happy to help you. Please feel free to contact us!",
            "_contact_btn": "Contact",
            "_contact_t1": "Project Coordinator",
            "_contact_t2": "Project Contributor",
            "_foot_copyrig": "URIsolve Team",
            "_fundamentals_R": "Branches",
            "_fundamentals_N": "Nodes",
            "_fundamentals_T": "Isolated Voltage Sources",
            "_fundamentals_C": "Current Sources",
            "_fundamentals_E": "Equations",
            "_fundamentalsTitle": "Fundamental Variables (of the circuit under analysis)",
            "_snTitle": "Supernodes",
            "_snNodes": "Formed by Nodes: ",
            "_snStepsBtn": "Show Steps",
            "_snEquat": "Equations: ",
            "_currents": "Branch Currents arbitration",
            "_knlNode": "Node",
            "_kmlMesh": "Mesh",
            "_knlTitle": "Current Equations (Kirchhoff Currents Law - KCL)",
            "_kmlTitle": "Mesh Current Equations (Kirchhoff Mesh Law - KML)",
            "_eqSystemTitle": "Equation System",
            "_floating": "Floating",
            "_grounded": "Grounded",
            "_eqStep1": "Reorder current equations",
            "_eqStep1MCM": "Inicial equation system",
            "_eqStep2": "Substitute the known currents",
            "_eqStep2MCM": "Substitute the mesh current values",
            "_eqStep3": "Compute the remaining currents using Ohm's Law",
            "_eqStep3MCM": "Substitute the circuit component values",
            "_eqStep4": "Substitute each current by its equation",
            "_eqStep5": "Replace the constants with their value",
            "_eqStep6.0": "Set a reference for each floating supernode",
            "_eqStep6.1": "The voltage of each node from a floating supernode must be expressed as a function of the reference node.",
            "_eqStep6.2": "In the Supernodes section, you can confirm that node equations are already referenced to the chosen node.",
            "_eqStep6.3": "Use these expressions to perform the substitution in the equation system.",
            "_eqStep6.4": "In supernode ",
            "_eqStep6.5": " the node ",
            "_eqStep6.6": " was chosen as a reference.",
            "_ShowHowBtn":" View",
            "_step": "Step",
            "_notes":"Notes: ",
            "_resMesh" : "Mesh Current Values",
            "_resBranch" : "Branch Currents computation",
            "_and": "and",
            "_nodeVoltages": "Node Voltages",
            "_meshCurrents": "Mesh Currents",
            "_currResNotes1":"Note: the following currents were obtained by an existing current source in their branch",
            "_currResNotes2":"Note: the following currents were obtained by their Ohm's Law equation",
            "_currResNotes1MCM":"Note: Each branch current is computed through the algebraic sum of the mesh currents flowing in that branch",
            "_currResNotes3":"Note: the following currents were obtained by their KCL equation, since they belong to branches with isolated voltage sources",
            "_warningTitle": "Warning !",
            "_warningInfo": "The following issues have been identified:",
            "_warning01-1": "Virtual nodes",
            "_warning01-2": "were identified as real nodes.",
            "_warning03-1": "Some nodes had an inappropriate ID and were changed:",
            "_warning03-2": "The node",
            "_warning03-3": "was changed to",
            "_warning08-1": "Found ammeters in the same branch:",
            "_warning08-2": "Ammeters",
            "_warning08-3": "are placed in the same branch. The ammeter",
            "_warning08-4": "was chosen to determine the current direction.",
            "_warning10-1": "Found voltage sources with different frequencies:",
            "_warning10-2": "Sources list: ",
            "_warning10-3": "The chosen frequency was: ",
            "_warning12-1": "Found voltmeters measuring the same electric potential difference:",
            "_warning12-2": "List of removed voltmeters: ",
            "_warning14-1": "Could not find an available Ground node. The node",
            "_warning14-2": "was selected as Ground.",
            "_warning16-0": "The following voltage sources were grouped together:",
            "_warning16-1": "Sources ",
            "_warning16-2": "were grouped into the equivalent source ",
            "_errorTitle": "Problems occured !",
            "_errorInfo": "Errors identified during simulation. Please rectify the netlist and submit again.",
            "_errCode00-0": "Found",
            "_errCode00-1": "non-identified real node",
            "_errCode00-2": "Found",
            "_errCode00-3": "non-identified real nodes",
            "_errCode02-0": "The following nodes have an invalid reference: ",
            "_errCode04-0": "Found components with invalid units:",
            "_errCode04-1": "The component",
            "_errCode04-2": "has the following unit:",
            "_errCode05-0": "Found the following duplicated component IDs:",
            "_errCode06-0": "Found the following invalid AC components in DC circuit:",
            "_errCode07-0": "Found multiple current sources in the same branch:",
            "_errCode07-1": "The following sources are in the same branch:",
            "_errCode11-0": "A short circuit was detected in the following nodes:",
            "_errCode15": "The uploaded circuit cannot be analysed through Node Voltage Method, since it does not have any real Nodes.",
            "_errCode18-0": "The uploaded circuit cannot be analysed because it contains both DC and AC Voltage Sources.",
            "_errCode18-1": "DC Sources: ",
            "_errCode18-2": "AC Sources: ",
            "_circuitImage": "Circuit Image",
            "_infoTitle": "Other Circuit Information",
            "_info_F": "Frequency",
            "_info_A": "Ammeters",
            "_info_T": "Simulation",
            "_tip":"Tip",
            "_tipGnd": "Tip - The number of unknowns can be reduced if the Ground is placed in one of the following nodes:",
            "_tipAmm1": "of",
            "_tipAmm2": "Branches do not have an Ammeter; You can use an Ammeter in each branch where you want to arbitrate the direction of the current, otherwise this application arbitrates that direction.",
            "_showAllBtn": "Expand results",
            "_return": "Return",
            "_equivImpTitle": "Equivalent impedances and voltages",
            "_equivImp1": "Branch from",
            "_equivImp2": "to",
            "_currFlow": "Flow",
            "_currComponents": "Components",
            "_exampleTxt":"Example",
            "_difficulty":"Overall Difficulty",
            "_barsComplexity":"Complexity",
            "_barsAnalysis":"Analysis",
            "_barsEquations":"Equations",
            "_buttonTry":"Analyse circuit",
            "_lastUpdated":"Last updated on ",
            "_example1Desc":"This is a basic example with three Nodes and no Isolated Voltage Sources.",
            "_example2Desc":"This is a circuit with four Nodes and an Isolated Voltage Source that produces a Grounded Supernode.",
            "_example3Desc":"This is a circuit with four Nodes and an Isolated Voltage Source that produces a Floating Supernode.",
            "_example4Desc":"This is a circuit with four Nodes and two Isolated Voltage Sources that produce a Grounded and a Floating Supernode.",
            "_login-welcome":"Welcome !",
            "_login-noaccount":"Not a member? ",
            "_login-createaccount":"Sign Up.",
            "_login-alreadyhave":"Already have an account?",
            "_login-enter":"Log In.",
            "_login-register":"Sign up to access the simulation results.",
            "_login-regButton":"Create account",
            "_login-verify":"We sent you a confirmation e-mail to verify your account. Please check your inbox.",
            "_login-email-exists":"The e-mail address you provided is already registered. You can recover your password by clicking on the button below.",
            "_login-forgotPw":"Forgot Password?",
            "_login-resetPw":"Reset here!",
            "_sect_contact_message": "Message",
            "_sect_contact_name": "Name",
            "_sect_contact_email": "E-mail Address",
            "_sect_contact_submit": "Send message",
            "_sect_contact_emaildisclaimer": "We promise that we will never share your e-mail address!",
            "_sect_contact_send_error":"Error! Sorry there was an error sending your message.",
            "_sect_contact_send_success_l1":"You message has been sent to our team.",
            "_sect_contact_send_success_l2":"We will answer as soon as possible.",
            "_firstname":"First Name",
            "_lastname":"Last Name",
            "_number":"Number",
            "_institution":"Institution",
            "_mechanographic":"Mechanographic Nr.",
            "_user-info-text":"Insert your information in the output",
            "_edit-acc-info":"Edit your profile using the form below.",
            "_info-updated":"Your information was updated",
            "_AuxiliarMeshCurrNote1": "The meshes ",
            "_AuxiliarMeshCurrNote2": "are auxiliar meshes, therefore, they already have a current value, and don't have an equation. The mesh current value comes from the current source that the mesh contains.",
            "_MeshNumberTitle": "Number of Main (or Principal) and Auxiliar meshes",
            "_MeshNumberTitleMcr": "Number of needed meshes (mesh equations)",
            "_MeshTitle": "Selected Meshes (Auxiliar and Principal) and corresponding equations",
            "_MeshTitleMCR": "Selected Meshes and corresponding equations",
            "_MCMEqPri" : "Number of Principal meshes (Mp)",
            "_MCRMeshEq": "Number of meshes needed",
            "_MCMEqAux" : "Number of Auxiliar meshes (Ma)",
            "_nrOfEquations" : "Note: The number of main meshes (Mp) calculated corresponds to the number of mesh equations (of the system of equations), where the unknowns are the (fictitious) currents of the meshes.",
            "_AuxMeshes" : "Auxiliar Meshes",
            "_MainMeshes" : "Main (or Principal) Meshes",
            "_typeA" : "Auxiliar",
            "_typeP" : "Main",
            "_nrOfCurrSrc" : "Note: The number of auxiliary meshes is the same as the number of current sources (FC). Each auxiliary mesh passes through a single FC, normally choosing the same direction of flow of the (current of the) mesh in order to align itself in the direction of the FC current, thus assuming its own (positive) value.",
            "_MCMmethod" : "Mesh Current Method",
            "_MCRmethod" : "Branch Current Method",
            "_step_by_step" : "Step by Step Solution",
            "_project_coor" : "Project Coordinators",
            "_devel" : "Developers",
            "_abstract": "This document provides a step by step solution for the submitted circuit, using the Mesh Current Method (MCM).",
            "_abstractMCR": "This document provides a step by step solution for the submitted circuit, using the Branch Current Method (MCR).",
            "_Steps": "Steps",
            "_noSystem": "This circuit does not need an equation system in order to be solved.",
            "_branchIden": "Branch Currents identification",
            "_currentsTableCap": "List of the circuit currents and its properties\/components",
            "_page": "Page: ",
            "_noImage": "No image",
            "_resultsMCR" :"Results",
            "_calcResultMCR": "Branch currents calculation",
            "_singleeq": "Equation",
            "_table": "Table",
            "_btn_tsp_p1": "Superposition",
            "_btn_tsp_p2": "Theorem"
        },

        // Language Switch - PT-PT

        "portuguese": {
            "_hi-hello":"Olá, ",
            "_menu-contact": "Contactar",
            "_menu-help": "Instruções",
            "_menu-examples": "Exemplos",
            "_menu-docs": "Publicações",
            "_menu-movetop": "Topo",
            "_menu-account": "Conta",
            "_main-title_h1": "Em apenas Uma Aplicação:",
            "_main-title_p1": "Todos os Métodos de análise de circuitos",
            "_main-body_h1": "Comece a simulação abaixo.",
            "_main-body_p1": "Esta aplicação de análise de circuitos disponibiliza uma solução, passo a passo, usando apenas um ficheiro de Netlist. É possível submeter um segundo ficheiro, contendo uma imagem do circuito.",
            "_main-body_p2": "Por favor, efetue o upload dos seus ficheiros e escolha o método desejado para a análise do circuito.",
            "_main-upload_in": "Enviar ficheiros",
            "_btn_mtn_p1": "Método da",
            "_btn_mtn_p2": "Tensão nos Nós",
            "_btn_mcr_p1": "Método das",
            "_btn_mcr_p2": "Correntes nos Ramos",
            "_btn_mcm_p1": "Método das",
            "_btn_mcm_p2": "Correntes nas Malhas",
            "_btn-edit-acc":"Alterar perfil",
            "_sect_instruct": "Instruções",
            "_sect_examples": "Circuitos exemplo",
            "_sect_contact": "Contactar",
            "_instr-btn-next": "Próximo",
            "_instr-btn-previous": "Anterior",
            "_instr-1":'No QUCS, identifique todos os Nós com uma letra maiúscula através do componente "Name" e defina o Nó de referência utilizando o simbolo de "Ground".',
            "_instr-2":'Insira o controlador de simulação adequado e simule o circuito. De seguida clique em "Show Last Netlist" ou pressione F6 para gerar a Netlist.',
            "_instr-3":'Guarde a Netlist gerada através do botão "Save as" ou selecione o conteúdo de texto e guarde diretamente num ficheiro de texto.',
            "_instr-4":'Se pressionou o botão "Save as", escolha o formato "Plain Text" para guardar o ficheiro.',
            "_instr-5":'Carregue o ficheiro de texto para a aplicação juntamente com a sua imagem (opcional) e escolha o método de análise.',
            "_instr-video":'Video Demonstrativo',
            "_examples_p1": "Teste os nossos exemplos prontos a usar com apenas um clique!",
            "_contact_p1": "Estamos disponíveis para ajudar em qualquer questão relacionada com a Aplicação U=RIsolve. Não hesite em contactar-nos!",
            "_contact_btn": "Contactar",
            "_contact_t1": "Coordenador do Projeto",
            "_contact_t2": "Colaborador do Projeto",
            "_foot_copyrig": "Equipa URIsolve",
            "_fundamentals_R": "Ramos",
            "_fundamentals_N": "Nós",
            "_fundamentals_T": "Fontes Isoladas de Tensão",
            "_fundamentals_C": "Fontes de Corrente",
            "_fundamentals_E": "Equações",
            "_fundamentalsTitle": "Variáveis do Circuito",
            "_snTitle": "Supernós",
            "_snNodes": "Constituído por: ",
            "_snStepsBtn": "Ver Etapas",
            "_snEquat": "Equações: ",
            "_currents": "Arbitragem da Corrente nos Ramos",
            "_knlNode": "Nó",
            "_kmlMesh": "Malha",
            "_knlTitle": "Equações das Correntes (Lei de Kirchhoff dos Nós - LKN)",
            "_kmlTitle": "Equações das Correntes de malha (Lei de Kirchhoff das Malhas - LKM)",
            "_eqSystemTitle": "Sistema de Equações",
            "_floating": "Flutuante",
            "_grounded": "Aterrado",
            "_eqStep1": "Reordene as equações das correntes",
            "_eqStep1MCM": "Sistema de equações inicial",
            "_eqStep2": "Substitua as correntes conhecidas",
            "_eqStep2MCM": "Substitua o valor das correntes de malha conhecidas",
            "_eqStep3": "Obtenha as restantes correntes pela Lei de Ohm",
            "_eqStep3MCM": "Substitua o valor dos componentes do circuito",
            "_eqStep4": "Substitua as correntes pela sua equação",
            "_eqStep5": "Substitua as constantes pelos respetivos valores",
            "_eqStep6.0": "Defina uma referência para cada supernó flutuante",
            "_eqStep6.1": "A tensão de cada nó pertencente a um supernó flutuante deve ser expressa em função do nó de referência.",
            "_eqStep6.2": "Na secção dos Supernós, pode verificar que as equações dos nós já se encontram corretamente referenciadas ao nó escolhido.",
            "_eqStep6.3": "Utilize estas expressões para efetuar a substituição no sistema de equações.",
            "_eqStep6.4": "Para o supernó ",
            "_eqStep6.5": " foi escolhido o nó ",
            "_eqStep6.6": " como referência.",
            "_ShowHowBtn":" Ver",
            "_step": "Passo",
            "_notes":"Notas: ",
            "_resMesh" : "Valores das correntes de malha",
            "_resBranch" : "Valores das correntes dos ramos",
            "_and": "e",
            "_nodeVoltages": "Tensões nos Nós",
            "_meshCurrents": "Correntes nas Malhas",
            "_currResNotes1":"Nota: as seguintes correntes foram obtidas através de uma fonte de corrente existente no seu ramo",
            "_currResNotes2":"Nota: as seguintes correntes foram obtidas através da sua expressão segundo a Lei de Ohm",
            "_currResNotes1MCM":"Nota: cada corrente no ramo foi obtida através da soma algébrica das correntes de malha que existem nesse ramo.",
            "_currResNotes3":"Nota: as seguintes correntes foram obtidas através da sua expressão segundo a LKN, pois pertencem a ramos com fontes isoladas de tensão",
            "_warningTitle": "Atenção !",
            "_warningInfo": "Foram gerados os seguintes avisos:",
            "_warning01-1": "Os nós virtuais",
            "_warning01-2": "foram identificados como nós reais.",
            "_warning03-1": "Foram atribuídos IDs inapropriados a alguns nós, tendo sido alterados:",
            "_warning03-2": "O nó",
            "_warning03-3": "foi alterado para",
            "_warning08-1": "Foram detetados amperímetros no mesmo ramo:",
            "_warning08-2": "Os amperímetros",
            "_warning08-3": "encontram-se no mesmo ramo. O amperímetro",
            "_warning08-4": "determina o sentido da corrente nesse ramo.",
            "_warning10-1": "Foram detetadas fontes de tensão com diferentes frequências:",
            "_warning10-2": "Lista de fontes: ",
            "_warning10-3": "A frequência escolhida foi: ",
            "_warning12-1": "Foram detetados voltímetros a medir o mesma queda de tensão:",
            "_warning12-2": "Lista de voltímetros removidos: ",
            "_warning14-1": "Não foi encontrado um Ground no circuito. Foi escolhido o nó",
            "_warning14-2": "como Ground.",
            "_warning16-0": "As seguintes fontes de tensão foram automaticamente agrupadas:",
            "_warning16-1": "As fontes ",
            "_warning16-2": "foram agrupadas numa fonte equivalente ",
            "_errorTitle": "Ocorreu um problema !",
            "_errorInfo": "Foram identificados erros durante a simulação. Por favor corrija a netlist e volte a submeter.",
            "_errCode00-0": "Foi encontrado",
            "_errCode00-1": "nó real não identificado",
            "_errCode00-2": "Foram encontrados",
            "_errCode00-3": "nós reais não identificados",
            "_errCode02-0": "Os seguintes nós têm uma referência inválida: ",
            "_errCode04-0": "Foram encontrados componentes com unidades inválidas:",
            "_errCode04-1": "O componente",
            "_errCode04-2": "tem a seguinte unidade:",
            "_errCode05-0": "Foram encontrados os seguintes IDs duplicados:",
            "_errCode06-0": "Foram encontrados os seguintes componentes AC no circuito (DC):",
            "_errCode07-0": "Foram encontradas várias fontes de corrente no mesmo ramo:",
            "_errCode07-1": "As seguintes fontes encontram-se no mesmo ramo:",
            "_errCode11-0": "Foi identificado um curto circuito nos seguintes nós:",
            "_errCode15": "O circuito em questão não pode ser analisado pelo Método da Tensão nos Nós, porque não contém nenhum nó Real.",
            "_errCode18-0": "O circuito em questão não pode ser analisado porque contém Fontes de Tensão DC e AC",
            "_errCode18-1": "Fontes DC: ",
            "_errCode18-2": "Fontes AC: ",
            "_errCode15MCM": "O circuito em questão pode ser resolvido utilizando todos os passos do método. No entanto é mais simples aplicar simplesmente a Lei de Kirchhoff das Malhas.",
            "_circuitImage": "Imagem do Circuito",
            "_infoTitle": "Informação do Circuito",
            "_info_F": "Frequência",
            "_info_A": "Amperímetros",
            "_info_T": "Simulação",
            "_tip":"Dica",
            "_tipGnd": "Dica - O número de incógnitas pode ser reduzido se o Ground for colocado num dos seguintes nós:",
            "_tipAmm1": "dos",
            "_tipAmm2": "Ramos não têm Amperímetro; pode utilizar um Amperímetro em cada Ramo em que pretenda arbitrar o sentido da corrente, caso contrário esta aplicação arbitra esse sentido.",
            "_showAllBtn": "Expandir resultados",
            "_return": "Voltar",
            "_equivImpTitle": "Impedâncias e tensões equivalentes",
            "_equivImp1": "Ramo de",
            "_equivImp2": "para",
            "_currFlow": "Direção",
            "_currComponents": "Componentes",
            "_exampleTxt":"Exemplo",
            "_difficulty":"Dificuldade Geral",
            "_barsComplexity":"Complexidade",
            "_barsAnalysis":"Análise",
            "_barsEquations":"Equações",
            "_buttonTry":"Analisar circuito",
            "_lastUpdated":"Última atualização a ",
            "_example1Desc":"Este circuito é um exemplo básico com três Nós, sem Fontes Isoladas de Tensão.",
            "_example2Desc":"Este circuito é um exemplo com quatro Nós, e uma Fonte Isolada de Tensão que forma um Supernó Aterrado.",
            "_example3Desc":"Este circuito é um exemplo com quatro Nós, e uma Fonte Isolada de Tensão que forma um Supernó Flutuante.",
            "_example4Desc":"Este circuito é um exemplo com quatro Nós, e duas Fontes Isoladas de Tensão que formam um Supernó Aterrado e um Supernó Flutuante.",
            "_login-welcome":"Bem vindo !",
            "_login-noaccount":"Não tem conta? ",
            "_login-createaccount":"Registe-se.",
            "_login-alreadyhave":"Já tem conta?",
            "_login-enter":"Entre.",
            "_login-register":"Registe-se para aceder aos resultados da simulação.",
            "_login-regButton":"Criar conta",
            "_login-verify":"Enviamos-lhe um e-mail de confirmação. Verifique a sua caixa de correio.",
            "_login-email-exists":"O endereço de e-mail que forneceu já se encontra registado. Pode recuperar a sua password clicando no botão a baixo.",
            "_login-forgotPw":"Esqueceu-se da password?",
            "_login-resetPw":"Redefina aqui!",
            "_sect_contact_message": "Mensagem",
            "_sect_contact_name": "Nome",
            "_sect_contact_email": "Endereço de E-mail",
            "_sect_contact_submit": "Enviar mensagem",
            "_sect_contact_emaildisclaimer": "Prometemos nunca partilhar o seu e-mail com terceiros!",
            "_sect_contact_send_error":"Erro! Desculpe mas ocorreu um erro ao enviar a sua mensagem.",
            "_sect_contact_send_success_l1":"A sua mensagem foi enviada para a nossa equipa.",
            "_sect_contact_send_success_l2":"Responderemos com a maior brevidade possível.",
            "_firstname":"Primeiro Nome",
            "_lastname":"Último Nome",
            "_number":"Número",
            "_institution":"Instituição",
            "_mechanographic":"Nº Mecanográfico",
            "_user-info-text":"Insira os seus dados no ficheiro de output",
            "_edit-acc-info":"Pode editar o seu perfil a partir do formulário seguinte.",
            "_info-updated":"A sua informação foi atualizada",
            "_AuxiliarMeshCurrNote1": "As malhas ",
            "_AuxiliarMeshCurrNote2": "são do tipo auxiliar, logo, têm valor de corrente definido e não possuem equação. O valor da corrente da malha é imposto pela fonte de corrente que ela contém.",
            "_MeshNumberTitle": "Número de malhas Principais e Auxiliares",
            "_MeshNumberTitleMcr": "Número de (equações das) Malhas necessárias",
            "_MeshTitle": "Malhas selecionadas (Auxiliares e Principais) e equações correspondentes",
            "_MeshTitleMCR": "Malhas selecionadas e equações correspondentes",
            "_MCMEqPri" : "Número de malhas Principais (Mp)",
            "_MCRMeshEq" :"Cálculo número de malhas necessárias",
            "_MCMEqAux" : "Número de malhas Auxiliares (Ma)",
            "_nrOfEquations" : "Nota: O número de malhas principais (Mp) calculado corresponde ao número de equações das malhas (do sistema de equações), em que as incógnitas são as correntes (fictícias) das malhas.",
            "_AuxMeshes" : "Malhas Auxiliares",
            "_MainMeshes" : "Malhas Principais",
            "_typeA" : "Auxiliar",
            "_typeP" : "Principal",
            "_typePMCR" :"",
            "_nrOfCurrSrc" : "Nota: O número de malhas auxiliares é o mesmo que o número de fontes de corrente (FC). Cada malha auxiliar passa numa única FC, normalmente escolhendo-se o sentido de circulação da (corrente da) malha igual de forma a alinhar-se no sentido da corrente da FC, assumindo assim o seu próprio valor (positivo).",
            "_MCMmethod" : "Método da Corrente das Malhas",
            "_MCRmethod" : "Método da Corrente nos Ramos",
            "_step_by_step" : "Solução Passo a Passo",
            "_project_coor" : "Coordenadores do Projeto",
            "_devel" : "Desenvolvedores",
            "_abstract": "Este documento fornece uma solução passo a passo para o circuito submetido, usando o Método da Corrente das Malhas (MCM)",
            "_abstractMCR": "Este documento fornece uma solução passo a passo para o circuito submetido, usando o Método da Corrente nos Ramos(MCR)",
            "_Steps": "Passos",
            "_noSystem": "Este circuito não necessita de um sistema de equações para ser resolvido.",
            "_branchIden": "Identificação da Corrente nos Ramos",
            "_currentsTableCap": "Lista das Correntes do Circuito e as suas propriedades\/componentes",
            "_page": "Página: ",
            "_noImage": "Sem imagem",
            "_resultsMCR" :"Resultados",
            "_calcResultMCR": "Cálculo das correntes nos ramos",
            "_singleeq": "Equação",
            "_table":"Tabela",
            "_btn_tsp_p1": "Teorema da",
            "_btn_tsp_p2": "Sobreposição",
        }
    };

    // Swap between dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap when menu changes
    $("#lang-pt").on("click", function () {
        var flag = $("#lang-sel-flag");
        var txt = $("#lang-sel-txt");
        var appImgEn = $("#app-insight-en");
        var appImgPt = $("#app-insight-pt");
        var appVidEn = $("#app-video-en");
        var appVidPt = $("#app-video-pt");
        set_lang(dictionary.portuguese);
        flag.removeClass();
        flag.addClass('flag-icon flag-icon-pt');
        txt.text('Português');
        appImgEn.hide();
        appImgPt.show();
        appVidPt.show();
        appVidEn.hide();

    });

    $("#lang-en").on("click", function () {
        var flag = $("#lang-sel-flag");
        var txt = $("#lang-sel-txt");
        var appImgEn = $("#app-insight-en");
        var appImgPt = $("#app-insight-pt");
        var appVidEn = $("#app-video-en");
        var appVidPt = $("#app-video-pt");
        set_lang(dictionary.english);
        flag.removeClass();
        flag.addClass('flag-icon flag-icon-gb');
        txt.text('English');
        appImgPt.hide();
        appImgEn.show();
        appVidPt.hide();
        appVidEn.show();

    });

    // Set initial language
    set_lang(dictionary.portuguese);
    var flag = $("#lang-sel-flag");
    var txt = $("#lang-sel-txt");
    var appImgEn = $("#app-insight-en");
    var appImgPt = $("#app-insight-pt");
    var appVidEn = $("#app-video-en");
    var appVidPt = $("#app-video-pt");
    flag.removeClass();
    flag.addClass('flag-icon flag-icon-pt');
    txt.text('Português');
    appImgEn.hide();
    appImgPt.show();
    appVidPt.show();
    appVidEn.hide();
});