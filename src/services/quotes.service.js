const KEY="quotes";

const getQuotes = ()=>{
    try{
        return JSON.parse(localStorage.getItem(KEY)||"[]")
    }catch(e){
        return []
    }
    
}

const setQuotes = (quotes)=>{
    localStorage.setItem(KEY,JSON.stringify(quotes))
}

export default {
    getAll() {
        return getQuotes()
    },
    add(text,id) {
        const quotes = getQuotes()
        quotes.push({ text,id })
        setQuotes(quotes)
        return quotes
    },
    delete(id) {
        const quotes = getQuotes()
        quotes.splice(quotes.findIndex(i => i.id == id),1)
        setQuotes(quotes)
        return quotes
    }
}