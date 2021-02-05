

const Welcome = (submit, formData, handleChange) => {



  return <form onSubmit={(e) => submit(e)}>
    <input placeholder="name" value={formData.name}
      onChange={handleChange}
      name="name"
    />
    <input placeholder="surname" value={formData.surname}
      onChange={(e) => handleChange(e)}
      name="surname"
    />
    <input placeholder="place" value={formData.place}
      onChange={(e) => handleChange(e)}
      name="place"
    />
    <input placeholder="age" value={formData.age}
      onChange={(e) => handleChange(e)}
      name="age"
    />
    <input placeholder="idNumber" value={formData.idNumber}
      onChange={(e) => handleChange(e)}
      name="idNumber"
    />

  </form>
}


export default Welcome;