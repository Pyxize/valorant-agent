import {useState} from "react";
import {EdgeTitle} from "../Title/EdgeTitle";
import './BoxAbilitie.scss'


function BoxAbilities({render}) {
    const [dataAbilities, setDataAbilities] =  useState(render)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [active, setActive] = useState(0)


    const Icon = ({handleClick, icon, alt, className}) => (
        <button type="button" className={className} onClick={handleClick}>
            <img className="block_icon_size" src={icon}
                 alt={alt}/>

        </button>
    );


    console.log(dataAbilities)

    const handleAbilitieDescription = (index: number) => {
        setSelectedIndex(index)
    };


    return (
        <div className="flex flex-col">
            <div className="flex">
                {dataAbilities.map((spellData, index) => (
                    <>
                    <div className="wrapper_abilities">
                        <div className="wrapper_abilities_list">
                            <Icon
                                className={"block_icon " +
                                    (
                                        index < 5 ? 'mr-6' : '') +
                                    (selectedIndex === index ? " active" : '')
                                }
                                key={index}
                                alt={spellData.displayName}
                                icon={spellData.displayIcon}
                                handleClick={() => handleAbilitieDescription(
                                    index
                                )}
                            />
                        </div>
                    </div>
                    </>
                ))}
            </div>
            {selectedIndex !== null && (
                <div className="flex flex-col justify-start items-start max-w-[450px] mt-4">
                    <EdgeTitle title={dataAbilities[selectedIndex].displayName}/>
                    <p className="text-white font-light">{dataAbilities[selectedIndex].description}</p>
                </div>
            )}
        </div>
    );

}
export default BoxAbilities