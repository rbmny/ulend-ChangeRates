"use strict";
function ՐՏ_with__name__(fn, name) {
    fn.__name__ = name;
    return fn;
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    if (Set && iterable.constructor === Set) {
        return Array.from(iterable);
    }
    return Object.keys(iterable);
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}

    var df, dfR, dfS, scorePre, scoreCredito, garantiaImovel120, garantiaImovel80, garantiaRecebiveis50, garantiaRecebiveis150, garantia20, garantia50, aval;
    df = {
        "Rating": [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "B5", "B6", "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4" ],
        "Score": [ 850, 810, 770, 730, 690, 650, 610, 570, 530, 490, 450, 410, 370, 330, 290, 250, 210, 170, 100 ],
        "Imovel 120%": [ .65, .73, .8, .88, .94, 1, 1.16, 1.25, 1.34, 1.44, 1.49, 1.6, 1.67, 1.83, 1.95, 2.09, 2.22, 2.38, 2.47 ],
        "Imovel 80%": [ .7, .78, .85, .93, .99, 1.05, 1.21, 1.3, 1.39, 1.49, 1.54, 1.65, 1.72, 1.88, 2, 2.14, 2.27, 2.43, 2.52 ],
        "Recebiveis 50%": [ 1.14, 1.22, 1.28, 1.36, 1.41, 1.47, 1.62, 1.71, 1.8, 1.89, 1.94, 2.04, 2.11, 2.26, 2.38, 2.51, 2.64, 2.78, 2.87 ],
        "Recebiveis 150%": [ 1.02, 1.09, 1.15, 1.22, 1.26, 1.32, 1.45, 1.53, 1.61, 1.69, 1.73, 1.83, 1.89, 2.02, 2.13, 2.24, 2.36, 2.49, 2.57 ],
        "Garantia 20%": [ 1.14, 1.22, 1.28, 1.36, 1.41, 1.47, 1.62, 1.71, 1.8, 1.89, 1.94, 2.04, 2.11, 2.26, 2.38, 2.51, 2.64, 2.78, 2.87 ],
        "Garantia 50%": [ 1.02, 1.09, 1.15, 1.22, 1.26, 1.32, 1.45, 1.53, 1.61, 1.69, 1.73, 1.83, 1.89, 2.02, 2.13, 2.24, 2.36, 2.49, 2.57 ],
        "Aval": [ 1.2, 1.28, 1.35, 1.43, 1.49, 1.55, 1.71, 1.8, 1.89, 1.99, 2.04, 2.15, 2.22, 2.38, 2.5, 2.64, 2.77, 2.93, 3.02 ]
    };
    dfR = df["Rating"];
    dfS = df["Score"];

    function getScorePre() {
      return document.getElementById("scorePre").value;
    }


    function getScoreCredito() {
      return document.getElementById("scoreCredito").value;
    }

    var scorePre = getScorePre()
    var scoreCredito = getScoreCredito()

    function scoreCreditoCheck() {
        var i, compRow, newScore, rating;
        for (i = 0; i < 19; i++) {
            if (getScoreCredito() >= dfS[i]) {
                compRow = i;
                newScore = dfS[i];
                rating = dfR[i];

                return compRow;
                // break;
            }
        }
    }

    function gi120() {
      garantiaImovel120 = df["Imovel 120%"][scoreCreditoCheck()];
        document.getElementById("1").innerHTML = (garantiaImovel120) + "% + CDI a.m";
    }
    function gi80() {
      garantiaImovel80 = df["Imovel 80%"][scoreCreditoCheck()];
        document.getElementById("2").innerHTML = (garantiaImovel80) + "% + CDI a.m";
    }
    function gr50() {
      garantiaRecebiveis50 = df["Recebiveis 50%"][scoreCreditoCheck()];
        document.getElementById("3").innerHTML = (garantiaRecebiveis50) + "% a.m";
    }
    function gr150() {
      garantiaRecebiveis150 = df["Recebiveis 150%"][scoreCreditoCheck()];
        document.getElementById("4").innerHTML = (garantiaRecebiveis150) + "% a.m";
    }
    function ga20() {
      garantia20 = df["Garantia 20%"][scoreCreditoCheck()];
        document.getElementById("5").innerHTML =(garantia20) + "% a.m";
    }
    function ga50() {
      garantia50 = df["Garantia 50%"][scoreCreditoCheck()];
        document.getElementById("6").innerHTML =(garantia50) + "% a.m";
    }
    function av() {
      aval = df["Aval"][scoreCreditoCheck()];
        document.getElementById("7").innerHTML =(aval) + "% a.m";
    }
    function rating(){
      document.getElementById("rating").innerHTML = dfR[scoreCreditoCheck()];
    }
    function scorePreCheck() {
        if (getScorePre() < 1e3) {
            document.getElementById("cobertura").innerHTML = "0%";
            // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
            document.getElementById("erro").innerHTML = "";
            document.getElementById("table1").style.visibility= "visible";
            document.getElementById("7").style.visibility= "visible";
            document.getElementById("aval").style.visibility= "visible";
            document.getElementById("3").style.visibility= "visible";
            document.getElementById("4").style.visibility= "visible";
            document.getElementById("gr50").style.visibility= "visible";
            document.getElementById("gr150").style.visibility= "visible";
            rating();
            gi120();
            gi80();
            gr50();
            gr150();
            ga20();
            ga50();
            av();
        }
        if (getScorePre() >= 1e3 && getScorePre() < 1500) {
            document.getElementById("cobertura").innerHTML = "25%";
            // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
            document.getElementById("erro").innerHTML = "";
            document.getElementById("table1").style.visibility= "visible";
            document.getElementById("7").style.visibility= "hidden";
            document.getElementById("aval").style.visibility= "hidden";
            document.getElementById("3").style.visibility= "visible";
            document.getElementById("4").style.visibility= "visible";
            document.getElementById("gr50").style.visibility= "visible";
            document.getElementById("gr150").style.visibility= "visible";
            rating();
            gi120();
            gi80();
            gr50();
            gr150();
            ga20();
            ga50();
        }
        if (getScorePre() >= 1500 && getScorePre() < 2100) {
            document.getElementById("cobertura").innerHTML = "100%";
            // document.getElementById("garantia").innerHTML = "Garantias Disponíveis:";
            document.getElementById("erro").innerHTML = "";
            document.getElementById("table1").style.visibility= "visible";
            document.getElementById("7").style.visibility= "hidden";
            document.getElementById("3").style.visibility= "hidden";
            document.getElementById("4").style.visibility= "visible";
            document.getElementById("gr50").style.visibility= "hidden";
            document.getElementById("gr150").style.visibility= "visible";
            document.getElementById("aval").style.visibility= "hidden";
            document.getElementById("6").style.visibility= "hidden";
            document.getElementById("5").style.visibility= "hidden";
            document.getElementById("ga50").style.visibility= "hidden";
            document.getElementById("ga20").style.visibility= "hidden";
            rating();
            gi120();
            gi80();
            gr150();
        }
        if (getScorePre() >= 2100) {
            document.getElementById("erro").innerHTML = "Crédito Reprovado";
            document.getElementById("cobertura").innerHTML = "";
            document.getElementById("rating").innerHTML = "";
            // document.getElementById("garantia").innerHTML = "";
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "";
            document.getElementById("6").innerHTML = "";
            document.getElementById("7").innerHTML = "";
            document.getElementById("3").style.visibility= "hidden";
            document.getElementById("4").style.visibility= "hidden";
            document.getElementById("gr50").style.visibility= "hidden";
            document.getElementById("gr150").style.visibility= "hidden";
            document.getElementById("table1").style.visibility= "hidden";
            document.getElementById("aval").style.visibility= "hidden";
        }
    }

    function runAll() {
        scorePreCheck();
        scoreCreditoCheck();
    }
