const tittle = document.querySelector('.title')
const intro = document.querySelector('.introduction')
const img = document.querySelector('.imagem')
const dataElement  = document.querySelector('.data')
const edit = document.querySelector('.edit')

const news2 = document.getElementById('news2')
const news3 = document.getElementById('news3')
const news4 = document.getElementById('news4')
const news5 = document.getElementById('news5')

const intro2 = document.getElementById('intro2')
const intro3 = document.getElementById('intro3')
const intro4 = document.getElementById('intro4')
const intro5 = document.getElementById('intro5')



const noticia = async (page)=>{
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?page=${page}`)

    const data = res.json(res)

  return data

}



const mostrar =  async (page)=>{

    const data = await noticia(page)
    
    const {items}= data

    

    
   tittle.innerHTML =items[0].titulo
   intro.innerHTML = items[0].introducao
   dataElement .innerHTML = items[0].data_publicacao
   edit.innerHTML = items[0].editorias

   news2.innerHTML = items[1].titulo
   news3.innerHTML = items[9].titulo
   news4.innerHTML = items[3].titulo
   news5.innerHTML = items[4].titulo

   intro2.innerHTML = items[1].introducao
   intro3.innerHTML = items[9].introducao
   intro4.innerHTML = items[3].introducao
   intro5.innerHTML = items[4].introducao
   
}

mostrar('2')