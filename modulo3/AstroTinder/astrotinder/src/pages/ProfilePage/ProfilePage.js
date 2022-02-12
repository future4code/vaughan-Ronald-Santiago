import styled from "styled-components"

// const Titulo = styled.div`
// display: flex;
// align-items: center;
// height: 60px;
// background color: black;
// padding-left: 10px;
// flex-direction: column;
// border: 1px solid black;

// `


const ProfilePage = (props) => {

    console.log("Props profilePage", props)
    return (

        <div>
            <div>
                <img src={props.profile.photo} alt="Imagem Perfil" /><br/>

                <span>{props.profile.bio}</span>
                <span>{props.profile.age}</span>
                <span>{props.profile.name}</span>
            </div>

            <button onClick={ props.escolhaPessoa}>OK</button>
            <button onClick ={props.pegarPerfil}>X</button>



        </div>
    )

}

export default ProfilePage