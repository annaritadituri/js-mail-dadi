<!--
TRACCIA

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

-->

<!--
CREARE UNA LISTA DI MAIL
-->
-Creare un array in cui ci saranno tutte le mail che hanno l'accesso
--Creare un ciclo for in cui generiamo automaticamente le mail da inserire nell'array
---Stampiamo la lista tramite un console.log

<!--
ACQUISIRE I DATI DALL'UTENTE
-->
-Creare un prompt che chieda all'utente di inserire una mail

<!--controllo dell'input-->

<!--
CONTROLLARE CHE LA MAIL INSERITA APPARTENGA ALLA LISTA
-->
-Creare un ciclo for che scorra le mail in ordine finche non trova quella giusta (flag == 0), o finchè non la trova mai (i < array.length)
    <!--
    nel ciclo
    -->
    -Creare un ciclo che scorra ogni carattere della mail che sta controllando in quel momento
    -SE trova la mail corrispondente
        -Settiamo la variabile flag (creata fuori dal ciclo) a 1
        --Settiamo la variabile mailCorretta uguale al valore della mail[i]

<!--
STAMPARE IL MESSAGGIO DI ESITO
-->
-Stampare il valore di mailCorretta