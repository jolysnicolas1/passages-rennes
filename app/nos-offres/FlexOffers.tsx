// "use client"

// import Image from "next/image"
// import test from "/public/offers-catering.jpg"
// import TraiteurEtChefs from "./TraiteurEtChefs"
// import OfferCocktails from "./OfferCocktails"
// import OfferCatering from "./OfferCatering"
// import OfferPrivate from "./OfferPrivate"
// import OfferSugar from "./OfferSugar"
// import OfferWedding from "./OfferWedding"


// const features = [
//     {
//         name: "Cocktails et réceptions ", 
//         // text: "Pour vos séminaires, fêtes d&apos;anniversaire, mariages, caterings, dîners privés, cocktails ou buffets, nous élaborons un menu sur-mesure, totalement adapté à vos besoins. Nous serons ravis de vous présenter nos solutions de traiteur et de chefs privés, sur Rennes et dans ses environs. Cuisinés sur place ou en livraison, nous vous proposons des plats de saison, élaborés à partir de produits frais et s&apos;adaptant à votre régime alimentaire, notamment en mettant à l&apos;honneur le végétal avec notre offre végétarienne et végétalienne.",
//     },
//     { 
//         name: "Cocktails et réceptions ", 
//         description: "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
//         src: "/public/offers-sucre.jpg",
//     },
//     {
//         name: "Dîners privés", 
//         description: "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier" ,
//         src: "/public/offers-sucre.jpg",
//     },
//     {
//         name: "Dîners privés", 
//         text: "Passages se dévoue à faire exister des événements qui vous ressemblent. Peu importe votre projet, nous sommes là pour vous assurer une prestation sur-mesure. Vous voulez organiser un mariage végétarien ? Un cocktail en plein-air, ou un banquet à la ferme ? Un repas d&apos;entreprise en format gastronomique ? Un dîner privé, à six à la maison ou dans un cadre atypique ? Un catering adapté à toutes les restrictions alimentaires pour le tournage de votre film ? Suprendre des amis avec un brunch en formule omakase ? Un goûter d&apos;anniversaire pour grands enfants amateurs de pâtisseries fines ?",
//     },
//     { 
//         name: "Caterings et séminaires",
//         description: "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés.",
//     },
//     { 
//         name: "Le coin sucré", 
//         description: "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l’heure du goûter ou au petit-déjeuner." },
//     {
//         name: "Mariages et grands événements",
//         description: "Profitez de moments magiques, et laissez-vous porter.",
//     },
//     {
//         name: "Dîners privés", 
//         // text: "Sur Rennes, en Bretagne, ou même plus loin, n&apos;hésitez pas à prendre contact avec nous pour donner vie à vos projets.",
//     },
//   ]

// export default function FlexOffers() {
//     return (
//         <div className="
//         w-full
//         h-full
//         flex
//         flex-col
        
//         ">
//             <div className="flex mx-auto relative justify-between">
//                 <OfferWedding></OfferWedding>
//                 <div className="flex flex-col w-0 md:w-fit  justify-center font-thin text-2xl py-32 p-5 italic text-lg">
//                     <p className="p-5 ">Menu sur mesure</p>
//                     <p className="p-5">Solutions de traiteur</p>
//                     <p className="p-5">Chefs privés</p>
//                 </div>
//             </div>

//             <div className="flex mx-auto relative justify-between">
//                 <div className="flex flex-col justify-center py-32 p-5 italic font-thin text-2xl text-lg text-end">
//                     <p className="p-5 ">Produits frais</p>
//                     <p className="p-5">Offre végétarienne, végétalienne</p>
//                 </div>
//                 <OfferCatering></OfferCatering>
//             </div>

//             <div className="flex mx-auto relative justify-center">
//                 <OfferCocktails></OfferCocktails>
//             </div>

//             <div className="flex mx-auto relative">
//                 <OfferSugar></OfferSugar>
//                 <div className="flex flex-col justify-center py-32 p-5 italic font-meduim text-lg text-end">
//                     <p className="p-5 ">Cuisiné sur place</p>
//                     <p className="p-5">Livré à domicile</p>
//                 </div>
//             </div>
//             <div className="flex mx-auto relative">
//                 <div className="flex flex-col justify-center py-32 p-5 italic font-meduim text-lg text-end">
//                     <p className="p-5 ">Plats de saison</p>
//                     <p className="p-5">Le végétal à l'honneur</p>
//                     <p className="p-5">Le végétal à l'honneur&apos;&lsquo;&#39;&rsquo;</p>
//                 </div>
//                 <OfferPrivate></OfferPrivate>
//             </div>
//         </div>
//     )
// }
