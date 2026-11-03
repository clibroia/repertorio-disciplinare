"use strict";

// Formulazioni del repertorio: una scheda per voce, raggruppate per categoria
const entries = [
  {
    id: "r1",
    category: "didattica",
    categoryName: "Disturbo dell’attività didattica",
    title: "Conversazioni durante la spiegazione",
    type: "richiamo",
    text: "Durante la spiegazione, lo studente conversa ripetutamente con i compagni, interferendo con il regolare svolgimento della lezione. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
  },
  {
    id: "r2",
    category: "didattica",
    categoryName: "Disturbo dell’attività didattica",
    title: "Interruzioni reiterate",
    type: "nota",
    text: "Lo studente interrompe ripetutamente l'attività didattica con interventi non pertinenti, nonostante i richiami del docente. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
  },
  {
    id: "r3",
    category: "didattica",
    categoryName: "Disturbo dell’attività didattica",
    title: "Schiamazzi o fischi",
    type: "nota",
    text: "Lo studente produce schiamazzi o fischi durante la lezione, interrompendo l'attività didattica. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
  },
  {
    id: "r4",
    category: "didattica",
    categoryName: "Disturbo dell’attività didattica",
    title: "Mancato rispetto dei turni di parola",
    type: "richiamo",
    text: "Lo studente interviene senza rispettare i turni di parola, ostacolando il confronto ordinato in classe. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5 («Inosservanza delle regole di convivenza»).",
  },
  {
    id: "r5",
    category: "diligenza",
    categoryName: "Diligenza e materiali",
    title: "Materiale didattico mancante",
    type: "richiamo",
    text: "Lo studente si presenta alla lezione sprovvisto del materiale didattico necessario, con conseguente difficoltà a partecipare all'attività proposta. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
  },
  {
    id: "r6",
    category: "diligenza",
    categoryName: "Diligenza e materiali",
    title: "Dimenticanze ripetute",
    type: "nota",
    text: "Lo studente risulta ripetutamente sprovvisto del materiale richiesto, nonostante precedenti segnalazioni. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
  },
  {
    id: "r7",
    category: "diligenza",
    categoryName: "Diligenza e materiali",
    title: "Consegne non rispettate",
    type: "richiamo",
    text: "Lo studente non ha svolto l'attività assegnata per la data prevista, senza aver rappresentato una motivazione al docente. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
  },
  {
    id: "r8",
    category: "diligenza",
    categoryName: "Diligenza e materiali",
    title: "Inadempienze reiterate",
    type: "nota",
    text: "Si rileva il ripetuto mancato rispetto delle consegne didattiche, già segnalato allo studente. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Mancato rispetto della frequenza e della diligenza scolastica»).",
  },
  {
    id: "r9",
    category: "frequenza",
    categoryName: "Frequenza, ritardi e giustificazioni",
    title: "Giustificazione non presentata",
    type: "richiamo",
    text: "Alla data odierna risulta ancora mancante la giustificazione dell'assenza o del ritardo nei termini previsti. Riferimento: Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
    reference: "Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
  },
  {
    id: "r10",
    category: "frequenza",
    categoryName: "Frequenza, ritardi e giustificazioni",
    title: "Ritardi ricorrenti",
    type: "comunicazione",
    text: "Si comunica alla famiglia il ripetersi di ingressi in ritardo, come risulta dal registro elettronico, e si invita a verificare la regolarità della frequenza. Riferimento: Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
    reference: "Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
  },
  {
    id: "r11",
    category: "frequenza",
    categoryName: "Frequenza, ritardi e giustificazioni",
    title: "Assenze ricorrenti",
    type: "comunicazione",
    text: "Si segnala alla famiglia la frequenza irregolare rilevata dal registro elettronico e si richiede un confronto per individuare eventuali criticità. Riferimento: Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
    reference: "Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
  },
  {
    id: "r12",
    category: "frequenza",
    categoryName: "Frequenza, ritardi e giustificazioni",
    title: "Ritardi strategici documentati",
    type: "nota",
    text: "Si rileva la reiterazione di ingressi in ritardo in coincidenza con attività didattiche programmate, come documentato dal registro elettronico. Riferimento: Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
    reference: "Regolamento d'Istituto, art. 20, «Assenze e ritardi»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3.",
  },
  {
    id: "r13",
    category: "smartphone",
    categoryName: "Smartphone e dispositivi digitali",
    title: "Smartphone visibile e acceso",
    type: "richiamo",
    text: "Durante l'orario scolastico lo studente tiene lo smartphone acceso e fuori dallo zaino, in violazione delle disposizioni d'Istituto. Riferimento: Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r14",
    category: "smartphone",
    categoryName: "Smartphone e dispositivi digitali",
    title: "Uso non autorizzato",
    type: "nota",
    text: "Durante la lezione lo studente utilizza lo smartphone senza autorizzazione del docente. Riferimento: Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r15",
    category: "smartphone",
    categoryName: "Smartphone e dispositivi digitali",
    title: "Mancato deposito su richiesta",
    type: "nota",
    text: "A seguito della richiesta del docente di riporre lo smartphone nell'apposita tasca dell'aula, lo studente non ottempera alla disposizione. Riferimento: Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r16",
    category: "smartphone",
    categoryName: "Smartphone e dispositivi digitali",
    title: "Tablet o PC per fini non didattici",
    type: "nota",
    text: "Lo studente utilizza il dispositivo digitale autorizzato per attività estranee alla finalità didattica indicata dal docente. Riferimento: Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento d'Istituto, art. 20, «Uso del telefono cellulare e di dispositivi elettronici»; Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r17",
    category: "rispetto",
    categoryName: "Rispetto delle persone",
    title: "Espressioni offensive verso compagno",
    type: "nota",
    text: "Lo studente rivolge a un compagno espressioni offensive, incompatibili con il rispetto dovuto alle persone. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
  },
  {
    id: "r18",
    category: "rispetto",
    categoryName: "Rispetto delle persone",
    title: "Espressioni irrispettose verso personale",
    type: "nota",
    text: "Lo studente si rivolge al personale scolastico con espressioni irrispettose. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
  },
  {
    id: "r19",
    category: "rispetto",
    categoryName: "Rispetto delle persone",
    title: "Derisione di un compagno",
    type: "nota",
    text: "Lo studente deride un compagno con commenti denigratori, compromettendo il clima di rispetto reciproco. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
  },
  {
    id: "r20",
    category: "rispetto",
    categoryName: "Rispetto delle persone",
    title: "Linguaggio volgare",
    type: "richiamo",
    text: "Lo studente utilizza espressioni volgari durante l'attività scolastica ed è richiamato a un linguaggio rispettoso. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
  },
  {
    id: "r21",
    category: "rispetto",
    categoryName: "Rispetto delle persone",
    title: "Espressioni discriminatorie",
    type: "segnalazione",
    text: "È stato rilevato un episodio di espressioni discriminatorie rivolte a una persona. Si trasmette la segnalazione al coordinatore e alla dirigenza per gli approfondimenti e le procedure di competenza. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–4 («Mancato rispetto degli altri, della loro dignità e dei loro diritti»).",
  },
  {
    id: "r22",
    category: "spazi",
    categoryName: "Spazi, arredi e beni",
    title: "Uso improprio degli arredi",
    type: "richiamo",
    text: "Lo studente utilizza gli arredi dell'aula in modo improprio, non rispettando le indicazioni impartite per la loro corretta conservazione. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
  },
  {
    id: "r23",
    category: "spazi",
    categoryName: "Spazi, arredi e beni",
    title: "Imbrattamento di banco",
    type: "nota",
    text: "Lo studente imbratta il banco o gli arredi scolastici, arrecando un pregiudizio alla cura degli spazi comuni. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
  },
  {
    id: "r24",
    category: "spazi",
    categoryName: "Spazi, arredi e beni",
    title: "Danneggiamento accertato",
    type: "segnalazione",
    text: "È stato accertato un danneggiamento di beni scolastici durante l'attività. Si segnala l'episodio al coordinatore e alla dirigenza per gli accertamenti e i provvedimenti di competenza. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5; Regolamento d'Istituto, art. 20.",
  },
  {
    id: "r25",
    category: "sicurezza",
    categoryName: "Sicurezza e laboratorio",
    title: "Mancato uso DPI",
    type: "nota",
    text: "Durante l'attività di laboratorio lo studente non utilizza i dispositivi di protezione individuale prescritti, nonostante le indicazioni ricevute. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
  },
  {
    id: "r26",
    category: "sicurezza",
    categoryName: "Sicurezza e laboratorio",
    title: "Uso non autorizzato di attrezzatura",
    type: "nota",
    text: "Lo studente utilizza un'attrezzatura del laboratorio senza la preventiva autorizzazione del docente, contravvenendo alle disposizioni di sicurezza. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
  },
  {
    id: "r27",
    category: "sicurezza",
    categoryName: "Sicurezza e laboratorio",
    title: "Comportamento pericoloso",
    type: "segnalazione",
    text: "Durante l'attività di laboratorio è stato osservato un comportamento potenzialmente pericoloso per la sicurezza delle persone. L'attività è stata interrotta e l'episodio viene segnalato per le valutazioni di competenza. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Inosservanza delle disposizioni organizzative o di tutela di salute e sicurezza»).",
  },
  {
    id: "r28",
    category: "movimenti",
    categoryName: "Uscite dall’aula e intervalli",
    title: "Uscita senza permesso",
    type: "nota",
    text: "Lo studente si allontana dall'aula durante la lezione senza aver richiesto e ottenuto il permesso del docente. Riferimento: Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
    reference: "Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
  },
  {
    id: "r29",
    category: "movimenti",
    categoryName: "Uscite dall’aula e intervalli",
    title: "Rientro tardivo dopo intervallo",
    type: "richiamo",
    text: "Lo studente rientra in classe dopo il termine dell'intervallo, ritardando l'avvio dell'attività didattica. Riferimento: Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
    reference: "Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
  },
  {
    id: "r30",
    category: "movimenti",
    categoryName: "Uscite dall’aula e intervalli",
    title: "Accesso non consentito al bar",
    type: "richiamo",
    text: "Lo studente si reca al bar o ai distributori al di fuori degli intervalli consentiti. Riferimento: Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
    reference: "Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
  },
  {
    id: "r31",
    category: "movimenti",
    categoryName: "Uscite dall’aula e intervalli",
    title: "Allontanamento dalle pertinenze",
    type: "segnalazione",
    text: "È stato rilevato l'allontanamento dello studente dalle pertinenze scolastiche durante l'orario previsto, senza autorizzazione. L'episodio viene segnalato immediatamente alla dirigenza. Riferimento: Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
    reference: "Regolamento d'Istituto, art. 20, «Uscita dall'aula» e «Intervalli»; Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 4–5.",
  },
  {
    id: "r32",
    category: "correttezza",
    categoryName: "Correttezza delle verifiche",
    title: "Copiatura durante verifica",
    type: "nota",
    text: "Durante la verifica lo studente consulta materiale non autorizzato, contravvenendo alle regole di correttezza della prova. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
  },
  {
    id: "r33",
    category: "correttezza",
    categoryName: "Correttezza delle verifiche",
    title: "Elaborato copiato",
    type: "nota",
    text: "Dagli elementi verificati risulta che l'elaborato consegnato riproduce contenuti altrui senza attribuzione, in violazione delle regole di correttezza del lavoro scolastico. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
  },
  {
    id: "r34",
    category: "correttezza",
    categoryName: "Correttezza delle verifiche",
    title: "Alterazione di documento",
    type: "segnalazione",
    text: "È stata rilevata una possibile alterazione di un documento scolastico. La circostanza viene segnalata al coordinatore e alla dirigenza per gli accertamenti necessari. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5 («Atti che compromettono il rapporto di collaborazione e fiducia tra studente e docente»).",
  },
  {
    id: "r35",
    category: "fumo",
    categoryName: "Fumo e sigarette elettroniche",
    title: "Fumo nelle pertinenze",
    type: "nota",
    text: "Lo studente è stato osservato mentre fumava all'interno delle pertinenze scolastiche, in violazione del divieto vigente. L'episodio viene segnalato anche ai soggetti incaricati degli adempimenti previsti dalla normativa antifumo. Riferimento: Regolamento n. 7 («Divieto di fumo nella scuola»); Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento n. 7 («Divieto di fumo nella scuola»); Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r36",
    category: "fumo",
    categoryName: "Fumo e sigarette elettroniche",
    title: "Sigaretta elettronica",
    type: "nota",
    text: "Lo studente utilizza una sigaretta elettronica negli spazi scolastici, in violazione del divieto vigente. L'episodio viene segnalato anche ai soggetti incaricati degli adempimenti previsti dalla normativa antifumo. Riferimento: Regolamento n. 7 («Divieto di fumo nella scuola»); Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
    reference: "Regolamento n. 7 («Divieto di fumo nella scuola»); Regolamento di disciplina n. 6, tabella delle infrazioni, p. 5.",
  },
  {
    id: "r37",
    category: "viaggi",
    categoryName: "Visite e viaggi d’istruzione",
    title: "Mancato rispetto indicazioni accompagnatori",
    type: "richiamo",
    text: "Durante l'uscita didattica lo studente non rispetta le indicazioni organizzative impartite dai docenti accompagnatori. Riferimento: Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
    reference: "Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
  },
  {
    id: "r38",
    category: "viaggi",
    categoryName: "Visite e viaggi d’istruzione",
    title: "Allontanamento dal gruppo",
    type: "segnalazione",
    text: "Durante l'uscita didattica lo studente si allontana dal gruppo senza autorizzazione. L'episodio viene segnalato al coordinatore e alla dirigenza per le valutazioni di competenza. Riferimento: Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
    reference: "Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
  },
  {
    id: "r39",
    category: "viaggi",
    categoryName: "Visite e viaggi d’istruzione",
    title: "Comportamento irrispettoso in visita",
    type: "nota",
    text: "Durante la visita didattica lo studente assume un comportamento irrispettoso verso le persone presenti, non conforme alle regole della comunità scolastica. Riferimento: Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
    reference: "Regolamento n. 8 («Visite e viaggi di istruzione»); Regolamento di disciplina n. 6, tabella delle infrazioni, pp. 3–5.",
  },
  {
    id: "r40",
    category: "reiterazione",
    categoryName: "Reiterazione e coordinamento",
    title: "Tre richiami preventivi",
    type: "coordinatore",
    text: "Dal registro elettronico risultano tre richiami preventivi per comportamenti inadeguati. Accertata la ricorrenza prevista dal Regolamento di disciplina, si procede secondo le competenze del coordinatore e con convocazione della famiglia. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
  },
  {
    id: "r41",
    category: "reiterazione",
    categoryName: "Reiterazione e coordinamento",
    title: "Tre note disciplinari",
    type: "coordinatore",
    text: "Dal registro elettronico risultano tre note disciplinari per comportamenti inadeguati. Si avvia la procedura di competenza del coordinatore per la valutazione della diffida e la convocazione della famiglia, sentito il Consiglio di classe. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
  },
  {
    id: "r42",
    category: "reiterazione",
    categoryName: "Reiterazione e coordinamento",
    title: "Segnalazione di reiterazione",
    type: "comunicazione",
    text: "Si segnala alla famiglia il ripetersi di comportamenti già oggetto di precedenti provvedimenti documentati nel registro elettronico e si propone un colloquio di approfondimento. Riferimento: Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
    reference: "Regolamento di disciplina n. 6, tabella delle infrazioni, p. 3 («Accumulo di 3 richiami» e «Accumulo di 3 note»); § 6 («Procedure per l'irrogazione delle sanzioni»).",
  },
];

// Elementi della pagina
const category = document.querySelector("#category");
const type = document.querySelector("#type");
const search = document.querySelector("#search");
const cards = document.querySelector("#cards");
const count = document.querySelector("#count");
const toast = document.querySelector("#toast");

// Etichette brevi mostrate sulle schede
const types = {
  richiamo: "Richiamo preventivo",
  nota: "Nota disciplinare",
  comunicazione: "Comunicazione",
  coordinatore: "Coordinatore",
  segnalazione: "Segnalazione",
};

let toastTimeout;

// Popola il menu delle categorie, una voce per categoria nell'ordine di comparsa
const categoryNames = new Map(entries.map((e) => [e.category, e.categoryName]));
for (const [key, name] of categoryNames) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = name;
  category.append(option);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

// Crea un elemento con classe e testo opzionali
function node(tag, cls, txt) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (txt !== undefined) n.textContent = txt;
  return n;
}

// Copia negli appunti; se l'API Clipboard non è disponibile ripiega su execCommand
async function copyText(area) {
  try {
    await navigator.clipboard.writeText(area.value);
    showToast("Testo copiato: incollalo nel registro elettronico");
  } catch {
    area.focus();
    area.select();
    area.setSelectionRange(0, area.value.length);
    try {
      if (document.execCommand("copy")) {
        showToast("Testo copiato");
        return;
      }
    } catch {}
    showToast("Testo selezionato: premi Ctrl+C (Cmd+C su Mac) per copiarlo");
  }
}

// Minuscolo, senza accenti e con apostrofo dritto: "attivita" trova "attività"
function normalize(text) {
  return text
    .toLocaleLowerCase("it")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'");
}

// Vero se la formulazione rispetta categoria, tipologia e testo cercato
function matchesFilters(e, q) {
  if (category.value !== "all" && e.category !== category.value) return false;
  if (type.value !== "all" && e.type !== type.value) return false;
  if (!q) return true;
  const haystack = normalize([e.title, e.categoryName, e.text, types[e.type]].join(" "));
  return haystack.includes(q);
}

// Costruisce la scheda espandibile di una formulazione
function createCard(e) {
  const card = node("details", "card");

  const summary = node("summary");
  summary.append(
    node("div", "card-title", e.title),
    node("span", "tag", types[e.type]),
    node("div", "card-sub", e.categoryName),
  );

  const area = node("textarea");
  area.id = "text-" + e.id;
  area.value = e.text;
  area.setAttribute("aria-label", "Testo per " + e.title);

  const label = node("label", null, "Testo modificabile");
  label.htmlFor = area.id;

  const restore = node("button", "btn btn-secondary", "Ripristina testo");
  restore.type = "button";
  restore.addEventListener("click", () => {
    if (area.value !== e.text && !confirm("Ripristinare il testo originale? Le modifiche andranno perse.")) return;
    area.value = e.text;
    showToast("Testo ripristinato");
  });

  const copy = node("button", "btn", "Copia testo");
  copy.type = "button";
  copy.addEventListener("click", () => copyText(area));

  const actions = node("div", "actions");
  actions.append(restore, copy);

  const body = node("div", "card-body");
  body.append(label, area, node("p", "reference", e.reference), actions);

  card.append(summary, body);
  return card;
}

// Le schede si creano una sola volta: i filtri le nascondono senza ricrearle,
// così i testi modificati e le schede aperte restano intatti
const cardElements = new Map(entries.map((e) => [e, createCard(e)]));
const emptyMessage = node("p", "empty", "Nessun risultato. Prova a modificare i filtri.");
cards.append(...cardElements.values(), emptyMessage);

function render() {
  const q = normalize(search.value.trim());
  let visible = 0;

  for (const [e, card] of cardElements) {
    const show = matchesFilters(e, q);
    card.hidden = !show;
    if (show) visible++;
  }

  count.textContent = visible === 1 ? "1 formulazione" : visible + " formulazioni";
  emptyMessage.hidden = visible > 0;
}

category.addEventListener("change", render);
type.addEventListener("change", render);
search.addEventListener("input", render);

document.querySelector("#reset").addEventListener("click", () => {
  category.value = "all";
  type.value = "all";
  search.value = "";
  render();
  search.focus();
});

render();
