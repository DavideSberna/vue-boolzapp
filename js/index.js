const { createApp } = Vue

  createApp({
    data() {
      return {
         
        contacts: [
          {
              id:1,
              name: 'Michele',
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
              name: 'Fabio',
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
              name: 'Samuele',
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
              name: 'Alessandro B.',
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
              name: 'Alessandro L.',
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
              name: 'Claudia',
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
              name: 'Federico',
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
              name: 'Davide',
              avatar: './img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
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


      userSelect: {
        name: '',
        avatar: '',
        messages: '',
        lastSeen: '',
        visible: '',
        id: '',
      },

      current: 0,
      messageText: '',
      usersFilter: '',
      writing: 'sto scrivendo...',
      writingStatus: false,
        
      }
    },
    methods: {
      clickList(items, key){
        // items.visible = !items.visible;
        this.current = key - 1;
    
        const newSelect = this.contacts.find(items => items.id === key)
        this.userSelect = {
            name: newSelect.name,
            avatar: newSelect.avatar,
            messages: newSelect.messages,
            lastSeen: newSelect.lastSeen,
            visible: newSelect.visible,
            id: newSelect.id,
        }   
      },
      scrollmessage(){
        this.$nextTick(() => {
            this.$refs.scroll[this.$refs.scroll.length - 1].scrollIntoView({behavior: 'smooth'})
        })

      },
      messageSent(){
        // console.log(this.messageText)
        const newMessage = {
                date: '19.22.00',
                message: this.messageText,
                status: 'sent'
        }
        this.contacts[this.current].messages.push(newMessage)
        // console.log(newMessage)
        // console.log(this.contacts[this.current].messages)

        const respMessage = {
                date: '33.22.00',
                message: 'ok',
                status: 'received'
        }
        setTimeout(()=>{
            console.log(this.writing)
            this.writingStatus = true  
        }, 500)
        setTimeout(()=>{
            console.log('messaggio')
            this.writingStatus = false
            this.contacts[this.current].messages.push(respMessage);
            this.scrollmessage()
    
            
        }, 2000)
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
      }
    },
    computed:{
        
    }
  }).mount('#app')