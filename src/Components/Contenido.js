import React from 'react'
import UseActividades from '../Hooks/useActividades'

const Contenido = ({usuario}) => {
    const { data: actividades, status: actividadesStatus, error: actividadesError } = useActividades()
    return (
        <>
        {actividadesStatus === 'loading' ? (
          <span>Cargando...</span>
        ) : actividadesStatus === 'error' ? (
          <span>Error</span>
        ) : ( <span>{actividades.d}</span> )}
      
      </>)
}

export default Contenido