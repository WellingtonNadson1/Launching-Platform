import { CheckCircle } from "phosphor-react";

export function Lesson(){
    return (
        <a href="#">
            <span>
                Terça 22 de junho 19h00
            </span>

            <div className="border border-gray-500 rounded p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20}/>
                        Conteúdo Liberado
                    </span>
                    <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 font-bold">
                        AO VIVO
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    Abertura do evento Ignite Lab
                </strong>
            </div>
        </a>
    )
}