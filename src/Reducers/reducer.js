import { ADD_POST, DELETE_POST, UPDATE_POST, LIKE_POST } from "../constant" 


const initialState = [
    {
      sno: 1,
      title: "How a Water Heater Can Change and Save Lives",
      content: "Bony and dishevelled, Kanta Kamde stands barefoot outside her house. I stand with her in silence, arms wrapped around my chest, gaze lowered. It feels like a condolence visit. Then she speaks, “We had run out of firewood. The cooking gas cylinder too was exhausted; we had not refilled it in a long time.”",
      liked: false
    },
    {
      sno: 2,
      title: "How Can We Use Command Prompt to Make Lives Better",
      content: "Bony and dishevelled, Kanta Kamde stands barefoot outside her house. I stand with her in silence, arms wrapped around my chest, gaze lowered. It feels like a condolence visit. Then she speaks, “We had run out of firewood. The cooking gas cylinder too was exhausted; we had not refilled it in a long time.”",
      liked: false
    },
    {
      sno: 3,
      title: "How to Play Guitar",
      content: "Bony and dishevelled, Kanta Kamde stands barefoot outside her house. I stand with her in silence, arms wrapped around my chest, gaze lowered. It feels like a condolence visit. Then she speaks, “We had run out of firewood. The cooking gas cylinder too was exhausted; we had not refilled it in a long time.”",
      liked: false
    },
    {
      sno: 4,
      title: "Best Place to Visit in 2023",
      content: "Bony and dishevelled, Kanta Kamde stands barefoot outside her house. I stand with her in silence, arms wrapped around my chest, gaze lowered. It feels like a condolence visit. Then she speaks, “We had run out of firewood. The cooking gas cylinder too was exhausted; we had not refilled it in a long time.”",
      liked: false
    }
]

const postModification = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return ([
                ...state, action.data
            ])

        case DELETE_POST:
            return (
                state.filter((e)=>{
                    return e !== action.data;
                })
            )

        case UPDATE_POST:
            let ind = state.indexOf(action.data)
            state[ind].title = action.title
            state[ind].content = action.content
            return(state)
        
        case LIKE_POST:
            let index = state.indexOf(action.data)
            state[index].liked = (!state[index].liked)
            if(state[index].liked === true) document.getElementById(`${state[index].sno}`).style.color = 'red';
            else document.getElementById(`${state[index].sno}`).style.color = 'black';
            return state

        default:
            return state;
    }
}

export default postModification;