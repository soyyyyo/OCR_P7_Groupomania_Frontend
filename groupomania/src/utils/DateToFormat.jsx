// formate la date vers un format jj/mm/aa hh/mm/ss
const dateToFormat = (date) => {
    return (
        new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date)
    )
}

export default dateToFormat