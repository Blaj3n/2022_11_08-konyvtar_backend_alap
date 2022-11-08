class AdminController {
    constructor(){
        const token = $('meta[name="csrf-token"]').attr("content");
        const konyvmodel = new KonyvModel(token);
        this.vegpont = "konyvek";
        $("#admin").on("click", () =>{
            konyvmodel.adatBe(this.vegpont, this.konyvAdminAdatok);
        });
        $("#public").on("click", () =>{
            konyvmodel.adatBe(this.vegpont, this.konyvPublicAdatok);
        });

        $(window).on("modosit", (event) =>{
            console.log(event.detail);
            konyvmodel.adatModosit(this.vegpont, event.detail);
        })
        $(window).on("torol", (event) =>{
            console.log(event.detail);
            konyvmodel.adatTorol(this.vegpont, event.detail);
        })
        $(window).on("veszem", (event) =>{
            console.log(event.detail);
            konyvmodel.konyvVesz(this.vegpont, event.detail);
        })
    }
}