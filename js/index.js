
const { createApp } = Vue

const DateTime = luxon.DateTime;

  createApp({
    data() {
      return {
         
        contacts: [
          {
              id:1,
              name: 'Michael Bonera',
              avatar: './img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              id:2,
              name: 'Fabio Fazio',
              avatar: './img/avatar_2.jpg',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              id:3,
              name: 'Alfio Bardolla',
              avatar: './img/avatar_3.jpg',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              id:4,
              name: 'Mario Draghi',
              avatar: './img/avatar_4.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              id:5,
              name: 'Simone Gazzani',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              id:6,
              name: 'Alfonso Galante',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              id:7,
              name: 'Nathan Rothschild',
              avatar: './img/avatar_7.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              id:8,
              name: 'Robertino Speranza',
              avatar: './img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ci mangiamo una pizza?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ],

      randomImageUser:[
        './img/avatar_8.jpg',
        './img/avatar_7.jpg',
        './img/avatar_5.jpg',
        './img/avatar_4.jpg',
        './img/avatar_2.jpg',
        './img/avatar_3.jpg',
        './img/avatar_1.jpg',
      ],

      
      randomMessage: [
        'Stasera non mi sento bene, sto a casa a guardare Netflix',
        'Non mi va, giocherò un pò alla play',
        'Vai via',
        'Non voglio più sentirti',
        'Ho solo bisogno di tempo per me...',
        'Per pasquetta tutto pronto',
        'Hai problemi con la macchina? Ci pensa mio cuggino'
      ],


      singleMessage:'',
      newAdd: '',
      current: 0,
      messageText: '',
      usersFilter: '',
      newContact: '',
      writing: 'sto scrivendo...',
      blankMessage: 'Inizia una nuova conversazione',
      writingStatus: false,
      notification: false,
      addUser: false,
      visible: false,
      newConversation: false,
      deleteSms: false,
      openPopUp: false,
      slice: "...",
      dateNow: DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss'),
      randomImage: '',
      deleteContact: false,
        
      }
    },
    methods: {
      clickList(items, key){
        
        this.current = key - 1;
        this.visible = true


       
        this.addUser = false
        this.save()
      },
      sliceLastMessage(index){
  

        if(this.contacts[index].messages[this.contacts[index].messages.length - 1].message.length === 0){
            return this.blankMessage
        } else if(this.contacts[index].messages[this.contacts[index].messages.length - 1].message.length > 15){
            return this.contacts[index].messages[this.contacts[index].messages.length - 1].message.slice(0, 20) + "..."
        } else{
            return this.contacts[index].messages[this.contacts[index].messages.length - 1].message
        }
 
      },
      scrollmessage(){
        this.$nextTick(() => {
            this.$refs.scroll[this.$refs.scroll.length - 1].scrollIntoView({behavior: 'smooth'})
        })

      },
      messageSent(){

        if (this.messageText.trim().length < 1) { 
            return false
        }
        const newMessage = {
                date: this.dateNow,
                message: this.messageText,
                status: 'sent'
        }
        this.contacts[this.current].messages.push(newMessage)

        this.singleMessage = this.randomArrMex(1, this.randomMessage.length - 1)

        if(this.messageText.length > 0){
            console.log("è vero")
        }

        

        const respMessage = {
                date: this.dateNow,
                message: this.randomMessage[this.singleMessage],
                status: 'received'
        }
        setTimeout(()=>{
            console.log(this.writing)
            this.writingStatus = true  
        }, 700)
        setTimeout(()=>{
            console.log('messaggio')
            this.writingStatus = false
            this.contacts[this.current].messages.push(respMessage);
            this.scrollmessage()
            this.save()
            
        }, 3000)
        this.messageText = ""
        this.save()
      }, 
      randomArrMex(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
      searchFilter(){
        console.log(this.usersFilter)
        this.contacts.forEach((user) =>{
            if(!user.name.toLowerCase().includes(this.usersFilter.toLowerCase())){
                user.visible = false;
            } else{
                user.visible = true
            }
        })
      },
      
      deleteMessage(index){
         this.contacts[this.current].messages.splice(index, 1)
        console.log(index)
      },
      deleteContactUser(){
        this.contacts.splice(this.current, 1);
        this.deleteContact = false
        
      },
      addContact(){
        this.addUser = !this.addUser   
      },
      saveContact(){

        this.addUser = false
        this.randomImage = this.randomArrMex(1, this.randomImageUser.length - 1)

        this.newAdd = {
            id:this.contacts.length + 1,
            name: this.newContact,
            avatar: this.randomImageUser[this.randomImage],
            visible: true,
            messages: [
                {
                    date: '',
                    message: '',
                    status: 'received'
                },
                {
                    date: '',
                    message: '',
                    status: 'sent'
                },
            ],
        }
        this.contacts.push(this.newAdd)
        console.log(this.contacts)
        this.newContact = ''
        this.save()
         
      },
      returnChat(){
        this.visible = false
      },
      save(){
        localStorage.setItem("chats", JSON.stringify(this.contacts));
      }
    },
    created(){
        if(!localStorage.getItem('chats')){
            this.save()
        } else{
            this.contacts = JSON.parse(localStorage.getItem("chats"))

        }
    }
  }).mount('#app')