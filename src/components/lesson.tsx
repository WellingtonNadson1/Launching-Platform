import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonPropos {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonPropos){

    const isavailableAt = isPast(props.availableAt)
    const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm'm'", {locale: ptBR})

    return (
        <a href="#">
            <span>
                {availableDateFormated}
            </span>

            <div className="border border-gray-500 rounded p-4 mt-2 hover:border-green-300">
                <header className="flex items-center justify-between">
                    
                    {isavailableAt ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            EM breve
                        </span>
                    )}

                    {isavailableAt ? (
                        <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 font-bold">
                            {props.type === 'live' ? "AO VIVO" : 'AULA PRÁTICA'}
                        </span>
                    ) : (
                        <span className="text-xs text-green-300 rounded px-2 py-[0.125rem] border border-green-300 font-bold">
                            {props.type === 'live' ? "AO VIVO" : 'AULA PRÁTICA'}
                        </span>
                    )
                    }
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}