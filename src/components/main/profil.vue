<template>
  <div>
    <h1>Profil</h1>
    <div class="profil-container">
      <div class="photo">
        <i class="pi pi-user"></i>
      </div>
      <div class="infos">
        <h2>Ralf Eichhorn</h2>
        <h3>Dipl. Ing (FH)</h3>
        <h3 class="profil-heading">Vita</h3>
        <p>FREITEXT</p>
        <ul>
          <li>Station X: 1999-2000</li>
          <li>Station Y: 1999-2000</li>
        </ul>
        <h3 class="profil-heading">Zertifikate und Qualifikationen</h3>
        <ul>
          <li>Zertifikat Z</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profil-container {
  display: flex;
  align-items: center;
  margin: 1vh;
}
.photo {
  width: 40%;
}

.infos {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.profil-heading {
  background: var(--eb-ac1);
  color: white;
  padding: 5px;
  width: 50%;
}

i {
  font-size: 7rem;
  background: grey;
  color: white;
  padding: 10px;
  border-radius: 7px;
}

@media only screen and (max-width: 700px) {
  .profil-container {
    flex-direction: column;
    
  }
  .photo {
    width: 100%;
    text-align: center;
  }
  .profil-heading {
    background: var(--eb-ac1);
    color: white;
    padding: 5px;
    width: 100%;
    
  }

  .infos{
    text-align: center;
  }
}
</style>