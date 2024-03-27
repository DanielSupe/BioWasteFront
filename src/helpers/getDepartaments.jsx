export const fetchDataDepartaments = async () => {
    try {
      const response = await fetch('https://api-colombia.com/api/v1/Department');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      // Transformar los datos según lo solicitado
      const transformedData = data.map((department) => ({
        value: department.id,
        label: department.name
      })).sort((a, b) => {
        return a.label.localeCompare(b.label); // Orden alfabético por el nombre del departamento
      });
      // Establecer los datos transformados en el estado
      return transformedData
    } catch (error) {
      console.error('Error:', error);
    }
};