## Esercizio di oggi: Vue To Do List

nome repo: vue-todolist

Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

# MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

# MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

# MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

### Bonus:

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

# SVOLGIMENTO

- Impostata la pagina statica con elementi essenziali, soprattutto l'El todo che si ripeterà più volte
- Inizializzo la mia app Vue mettendo nei data un array che conterrà oggetti todo starter
- Gli oggetti conterranno un valore text per il messaggio e un valore booleano per verificare il suo stato
- Stampo poi con un v-for in nell'El html tutti gli oggetti dell'array
- Controllo la variabile booleana, se impostata sul vero vorrà dire che il text del todo sarà sbarrato
- Implemento un elemento in html che se cliccato mi permetta di eliminare l'oggetto dall'array grazie al suo indice in fase di generazione
- Predispongo un input e un bottone "Aggiunti" che permettano all'utente di inserire un oggetto nell'array con il text inserito e lo stato di default su falso (ovvero non fatto)
- Aggiungo la copia nuovo oggetto all'array iniziale così da "scollgarlo"
- Il bottone "Aggiungi" ascolterà oltre il click anche l'evento della pressione del tasto invio della tastiera
- Premendo sul text sbarrato dell'oggetto si otterrà il cambio di stato, tornando su falso
