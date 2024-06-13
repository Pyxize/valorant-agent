import {NameAgent} from "../components/Name/NameAgent.tsx";
import {useLoaderData, useParams} from "react-router";
import ValorantAgent from "../type/valorantAgent.ts";
import BoxAbilities from "../components/Abilities/BoxAbilitie.tsx";
import {EdgeTitle} from "../components/Title/EdgeTitle.tsx";

function Agent() {
    const data: ValorantAgent = useLoaderData()
    return (
        <>
            <div className="absolute mt-16">
                <NameAgent repeat={5} className="mr-6" agent={data.data.displayName}/>
            </div>
                <div className="grid grid-cols-12 grid-flow-row-dense gap-4 absolute h-full z-10">
                    {/* AGENT */}
                    <div className="col-span-5">
                        <img src={data.data.bustPortrait} className="w-full h-full object-cover max-w-full max-h-full"
                             alt={data.data.displayName}/>
                    </div>
                    {/* Texte */}
                    <div className="col-span-7 flex items-end">
                        <div className="flex gap-8 items-start">
                                <div className="flex flex-col mb-32">
                                    <div className="flex flex-col items-start mb-2">
                                        <EdgeTitle title="Rôle"/>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-[60px] font-tungsten font-bold uppercase text-white">{data.data.role.displayName}</h2>
                                            <img className="w-6 h-6 mb-12" src={data.data.role.displayIcon}
                                                 alt={data.data.role.displayName}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start mt-2">
                                        <EdgeTitle title="Biography"/>
                                        <p className="font-light text-base text-white mt-2">{data.data.description}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-32">
                                <h2 className="text-[60px] font-tungsten font-bold uppercase text-white">Special
                                    abilities</h2>
                                <BoxAbilities render={data.data.abilities}/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="relative background-diagonal">
            </div>
        </>
    )
}

export default Agent