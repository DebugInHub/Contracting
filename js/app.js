const { createApp, ref } = Vue

const app = createApp({
  data() {
    return {
      name: "",
      gmail: "",
      phone: "",
      service: "",
      message: "",
      done: "",
      errors: []
    }
  },
  methods: {
    sendMessage() {
      if (this.name != "" && this.gmail != "" && this.phone != "" && this.service != "" && this.message != "") {
        let newMSG = {
          name: this.name,
          gmail: this.gmail,
          phone: this.phone,
          service: this.service,
          message: this.message
        };
    
        axios.post('https://greenhorse.site/api/mail.php', newMSG, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          console.log(res.data);
    
          if (res.data.success) {
            this.name = "";
            this.gmail = "";
            this.phone = "";
            this.service = "";
            this.message = "";
            this.done = "تم التسجيل بنجاح";
            this.errors = [];
          } else {
            this.done = "";
            this.errors.push('هناك خطأ في الإرسال يرجي إعاده الإرسال مرة أخرى');
          }
        }).catch((err) => {
          console.log(err);
          this.errors.push('هناك خطأ في الإرسال');
          this.done = "";
        });
      } else {
        this.errors = [];
        if (!this.name) {
          this.errors.push('يجب كتابة الاسم');
          this.done = "";
        }
        if (!this.gmail) {
          this.errors.push('يجب كتابة البريد الالكتروني');
          this.done = "";
        }
        if (!this.phone) {
          this.errors.push('يجب كتابة رقم الهاتف');
          this.done = "";
        }
        if (!this.service) {
          this.errors.push('يجب كتابة الخدمة المطلوبة');
          this.done = "";
        }
        if (!this.message) {
          this.errors.push('يجب كتابة نص الرسالة');
        }
      }
    }
    
  },
  mounted() {
  }
});

app.mount('#app');