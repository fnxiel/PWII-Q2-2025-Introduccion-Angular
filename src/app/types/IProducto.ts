export interface IProducto{
    id: number
    nombre: string
    descripcion: string
    estado: "existencia" | "agotado"
}