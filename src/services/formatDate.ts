export const compareDates = (initialDate: Date) => {
    const date = new Date(initialDate)
    const formatDate = new Intl.DateTimeFormat(['ban', 'id']).format(date)            
    const factoringDate = formatDate.split("/")
    const refactoringDate = []
    refactoringDate.push(factoringDate[2],factoringDate[1], factoringDate[0])
    const addingDate = refactoringDate.join("/")    
    return addingDate
  }