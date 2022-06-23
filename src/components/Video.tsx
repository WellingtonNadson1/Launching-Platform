import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, FileImage, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'

export function Video(){
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100] max-h-[70vh] aspect-video">
                    <Player>
                        <Youtube videoId="KJj70dBgRPo"/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - Abertura do Ignite Lab
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Nessa Aula vamos dar início ao projeto criando a estrutura da aplicação utilizando o Vite.Js juntamente com o ReactJs 
                        </p>

                        {/* AVATAR TEATCHER */}

                            <div className="flex items-center gap-4 mt-6">
                                <img className="h-16 w-16 rounded-full border border-blue-500"
                                src="https://github.com/wellingtonnadson1.png" 
                                alt="" />
                                <div className="flex flex-col">
                                    <strong className="font-bold text-2xl block">
                                        Wellington Nadson
                                    </strong>
                                    <span className="text-gray-200 text-sm block">
                                        Software Engenering
                                    </span>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o Desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material Complementar
                            </strong>
                            <p className="text-sm text-gray200 mt-2">
                                Acesse o material complementar para acelerar o seu desempenho.
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" href="">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                        <Image size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray200 mt-2">
                                Acesse o material complementar para acelerar o seu desempenho.
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                        <CaretRight size={24}/>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    )
}