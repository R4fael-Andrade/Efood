class Dish {
    title: string
    image: string
    description: string
    infos: string[]
    id: number
    assessment: string

    constructor(
        title: string, 
        image: string, 
        description: string,
        infos: string[], 
        id: number,
        assessment: string
    ){
        this.title = title
        this.image = image
        this.description = description
        this.infos = infos
        this.id = id
        this.assessment = assessment
    }
}

export default Dish