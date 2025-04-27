import "./Filter.css";


function Filter({data,onFilter}) {

    const filterSpeciesList = [...new Set(data.map(char => char.species))];

    const handleChange = (e) => {
        const selectedSpecies = e.target.value;
        onFilter(selectedSpecies); // Le decimos al padre cuál especie se seleccionó
      };

    return (
        <div className="filter">
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled hidden>Selecciona una especie</option>
                {filterSpeciesList.map((species,idx) => (<option key={idx} value={species}>
                {species}
            </option>))}
            </select>
        </div>
    )
}

export default Filter;