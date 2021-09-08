
// T: Főgombra kattintva mindig újabb li-t tesz az ul-be, szövege az, amit a felh. beír az input mezőbe.
let hanyadiksor = 1
let osszessor = 1
let szoveg = null

$("#fogomb").click (()  => {

            szoveg      = $("#inputMezo").val()
            hanyadiksor = parseInt(hanyadiksor)+1
            osszessor = hanyadiksor

            $("ul").append(` <li   class="sor"  id="sor${hanyadiksor}"   data-szamozo="${hanyadiksor}">
                                ${szoveg}
                                <button class="ikon">  <i class="fas fa-space-shuttle"></i>   </button>
                                <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>
                                <button class="jegy" id="jegy${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Jegyzet     </button>
                                <button class="megn" id="megn${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Megnevezés  </button>
                                <button class="rend" id="rend${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Sorrend     </button>
                                <button class="szin" id="szin${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Szín        </button>
                             </li>
            `)
}
)




// T: Dupla katt: piros-fekete betűszín-váltás.
let most = null
$("ul").on("dblclick","li",(event) => {
                                        // console.log(event)
most = $(event.target).css("color")
                                        // console.log(most)                                      
if (`${most}` !== "rgb(255, 0, 0)")      {
    $(event.target).css("color", "rgb(255, 0, 0)")  }
                                        //Egy másik módszerrel toggleClass-szal 2 szín között váltogat:    $(event.target).toggleClass("blue")  és ennél a css-ben kell osztályt felvenni.
else if (`${most}` !== "rgb(0, 0, 0)")   {
    $(event.target).css("color", "rgb(0, 0, 0)")  }
}
)




// T: 1 katt: kék-sárga... háttérszín váltás
katt = 0

$("ul").on("click","li",(event) => {
                                        // console.log(event)
    katt = katt + 1
                                        // console.log(katt)
            if (katt === 1) {
                $(event.target).css("background-color", "rgb(54, 105, 173)")    }
            else if (katt === 2) {
                $(event.target).css("background-color", "rgb(255, 204, 0)")     }
            else if (katt === 3) {
                $(event.target).css("background-color", "rgb(255, 119, 0)")     }
            else if (katt === 4) {
                $(event.target).css("background-color", "rgb(212, 230, 135)")   }
            else if (katt === 5) {
               $(event.target).css("background-color", "#c5dae4")               }
            else if (katt === 6) {
                $(event.target).css("background-color", "#fbebfe")              }
            else if (katt === 7) {
            $(event.target).css("background-color", "rgb(255, 255, 255)")   
    katt = 0                                                                    }
}
)




// T: ................. gombra kattintva az adott sort mindenestől kitörli.
let regidata = null
let ujdata = null
$("li").on("click", ".torl [data-szamozo]", (event) => {
                                            console.log(event)

    let mittorol = $(event.currentTarget).attr("data-szamozo")
                                            console.log(mittorol)
                                            // ??????????????????? Ez sz-em nem kell ide     mittorol = parseInt(mittorol)
    $(#(sor`${mittorol}`)).remove()         // ??????????????????? Hogy hivatkozzam pl. a sor class-ú és 4-es data-szamozo-s elemre?

                                            console.log(osszessor)
    for (let i=mittorol+1; i<osszessor+1; i++)  {
        regidata = $(".sor").attr(data-szamozo)        
        ujdata = parseInt(regidata) - 1
        $(".sor....................).attr(ujdata)               // ?????????????? Még nem fejeztem be. A sor data-szamozo attribútumai az ujdata értéket veszik fel. Hogyan legyen? A sor id-jére hivatkozzam vagy a rédi data-szamozo attribútumra? + Még le kell zárni a kül. zárójeleket!

    }


}
)




