import ReactTimeAgo, { ReactTimeagoProps } from 'react-timeago'

type TimeAgoProps = Omit<ReactTimeagoProps, 'formatter' | 'strings'> & {
    date: Date | number;
};

export const TimeAgo = (props: TimeAgoProps) => {
    const formatter = (value: number, unit: string, suffix: string) => {
        const unitsInPortuguese: any = {
            second: 'segundo',
            minute: 'minuto',
            hour: 'hora',
            day: 'dia',
            week: 'semana',
            month: 'mês',
            year: 'ano'
        };

        const pluralUnitsInPortuguese: any = {
            second: 'segundos',
            minute: 'minutos',
            hour: 'horas',
            day: 'dias',
            week: 'semanas',
            month: 'meses',
            year: 'anos'
        };

        const suffixInPortuguese = {
            ago: 'atrás',
            fromNow: 'a partir de agora'
        }[suffix] || suffix;

        // Use a versão plural se value for diferente de 1
        const unitInPortuguese = value > 1
            ? pluralUnitsInPortuguese[unit] || unit
            : unitsInPortuguese[unit] || unit;

        return `há ${value} ${unitInPortuguese} ${suffixInPortuguese}`;
    };

    return (
        <ReactTimeAgo
            {...props}
            formatter={formatter}
        />
    );
}