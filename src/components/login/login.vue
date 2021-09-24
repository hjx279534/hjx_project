<!--  
存在以下bug：
    1.登录不能使用中文用户名登录
    2.注册可以实现用户名登录
    3.没有对登录的数据格式进行校验

 -->
<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="login_fit">
      <a href="/login" :style="aStyle">登录</a>
    </div>
    <div class="register_fit">
      <a href="/register">注册</a>
    </div>
    <!-- 用户名和密码的图标 -->
    <div class="user"><img src="@/assets/user.png" alt="" /></div>
    <div class="pass"><img src="@/assets/pass.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  data() {
    // 密码校验  value：为表单中输入的值
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // 即如果data中的存有数据的话就进行匹配校验
        if (this.valiData.pass !== "") {
          // validateField：对部分表单字段进行校验的方法  下一行为该方法的参数形式
          /*  由此可知该函数的第一个参数和表单中props属性相对应
           *  	Function(props: array | string, callback: Function(errorMessage: string))
           *  且data中的ruleForm对象中的pass和username必须和props中的属性相对应
           *  this.$refs:为该form表单的引用
           */
          // this.$refs.ruleForm.validateField("pass");
        }
        callback();
      }
    };
    // 用户名校验
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        // 输入正确的回调函数
        callback();
      }
    };
    return {
      // ruleForm:为表单数据对象
      ruleForm: {
        username: "",
        pass: "",
      },
      valiData: {
        username: "",
        pass: "",
      },
      // rules:表单验证规则
      rules: {
        // 用户名校验规则    blur：当表单失去焦点时
        username: [{ validator: validateUsername, trigger: "blur" }],
        // 密码校验规则
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
      //样式设置
      aStyle: {
        color: "rgb(201, 20, 20)",
      },
      //请求的域名
      // domainName:'http://localhost:8080/spring/finduser',
    };
  },
  methods: {
    // 提交按钮
    submitForm(formName) {
      const that = this; //这里需要特别注意：最好先在函数体最前面引用一个this，不然进入深层次的函数体可能会影响this本身的值
      // 发起axios请求
      // if(that.)
      that
        .RequestMessage("/spring/finduser", this.ruleForm)
        .then((res) => {
          console.log(res);
          that.valiData.username = res.data.user;
          that.valiData.pass = res.data.pass;

          // validate:对整个表单进行校验的方法  强制性让判断在异步请求到数据后指向，否则，第一次提交不会成功，第二次才会成功
          if (that.valiData.username != "" && that.valiData.pass != "") {
            this.$refs[formName].validate(() => {            
              if (
                that.ruleForm.pass == that.valiData.pass &&
                that.ruleForm.username == that.valiData.username
              ) {
                this.$message({
                  showClose: true,
                  message: "恭喜你，登录成功",
                  type: "success",
                });
                // 这里不能使用replace，因为导航守卫通过后，无法跳转到index
                that.$router.push({path:'/index'})
                // 将用户的cookie存在本地
                localStorage.setItem('cookie',"JDJKJNNEAJKJE")
              } else {
                that.$message({
                  showClose: true,
                  message: "密码或用户名错误，请重新登录！",
                  type: "error",
                });
                that.$router.replace({path:'/login'})
                return false;
              }
            });
          }
        })
        .catch((error) => {
           that.$message({
                  showClose: true,
                  message: "用户不存在！",
                  type: "error",
                });
          console.log("login组件请求失败");
          console.log(error);
        });
    },
    // 重置按钮
    resetForm(formName) {
      // resetFields：对整个表单进行重置
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
   
  },
};
</script>

<style lang='less'  scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: rgb(186, 186, 248);
  display: flex;
  justify-content: center;
  align-items: center;
  // 这里不能使用@
  background-image: url("../../assets/background/login.jpg");
  background-size: cover;
  .el-form {
    width: 30%;
    height: 55%;
    border: 1px solid black;
    padding-right: 40px;
    padding-top: 70px;
    box-sizing: border-box;
    .el-form-item {
    }
  }
  .login_fit {
    position: absolute;
    left: 45%;
    top: 25%;
  }
  .register_fit {
    position: absolute;
    left: 50%;
    top: 25%;
  }
  a {
    color: rgb(22, 8, 8);
  }
  .user {
    position: absolute;
    left: 38.7%;
    top: 33%;
  }
  .pass {
    position: absolute;
    left: 39%;
    top: 44%;
  }
  .user img {
    height: 40px;
    width: 40px;
  }
  .pass img {
    height: 35px;
    width: 35px;
  }
}
</style>