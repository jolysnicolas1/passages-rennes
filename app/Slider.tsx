import SliderPictures from "./SliderPictures"
import TestProps from "./TestProps";

export default function Slider() {
    const pictures = ['porfolio01', 'portfolio03']

    return (
        <div className="w-7xl mx-auto flex align-center px-44 bg-black p-5 overflow-y-scroll snap-x space-x-44 snap-mandatory scroll-p-44"> 
        </div>
    )
}

{/* <dl className="">
{pictures.map((feature) => (
<div key={feature.name} className="border-t border-gray-200 pt-4">
    <dt className="">{feature.name}</dt>
</div>
))}
</dl> */}