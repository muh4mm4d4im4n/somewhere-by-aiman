// Array for products details
let pdetails = [
    {
        pname: "Picola Top Handle Bag - Mocha",
        ptag: "totebag",
        size: "",
        pprice: 189,
        pcart: 0,
        pid: 1,
        pimg: "totebag1-1.png",
    },
    {
        pname: "Saia Two-Way Mini Bag - Parchment",
        ptag: "shoulderbag",
        size: "",
        pprice: 239,
        pcart: 0,
        pid: 2,
        pimg: "shoulder1-1.png",
    },
    {
        pname: "Esbucket Mini Bucket Bag - Light Mocha",
        ptag: "bucketbag",
        psize: "",
        pprice: 179,
        pcart: 0,
        pid: 3,
        pimg: "bucketbag1-1.png",
    },
    {
        pname: "Basic Tee - Baby Blue",
        ptag: "tshirt",
        psize: "S",
        pprice: 39,
        pcart: 0,
        pid: 4,
        pimg: "tshirt1-1.png",
    },
    {
        pname: "Basic Sweatshirt - Navy",
        ptag: "sweatshirt",
        psize: "S",
        pprice: 89,
        pcart: 0,
        pid: 5,
        pimg: "sweatshirt1-1.png",
    },
  ];
  
  const ptag = new URLSearchParams(window.location.search).get("ptag");
  
  const product = pdetails.filter((product) => product.ptag === ptag)[0];
  
  const containerSection = document.querySelector(".pcontainer");
  