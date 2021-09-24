<!-- 
数据格式校验不完全正确，争对特定的字符（如—、%这些处理没有作用--使用正则表达式匹配的时候）

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
      <!-- 再次输入密码 -->
      <el-form-item prop="repeatpass">
        <el-input
          type="password"
          v-model="ruleForm.repeatpass"
          autocomplete="off"
          placeholder="请再次输入密码"
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
      <a href="/login">登录</a>
    </div>
    <div class="register_fit">
      <a href="/register" :style="aStyle">注册</a>
    </div>
    <!-- 用户名和密码的图标 -->
    <div class="user"><img src="@/assets/user.png" alt="" /></div>
    <div class="pass"><img src="@/assets/pass.png" alt="" /></div>
    <div class="pass_1"><img src="@/assets/pass.png" alt="" /></div>
  </div>
</template>

<script>
var patt = /([0-9]|[a-z]|[A-Z]|$|@)/i;
var starPatt = /^[0-9]/i;
var i;
export default {
  data() {
    let self = this;

    // 用户名校验
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        // 如果第一个字符是数字    注意：用户名第一个字符不能为数字  isNumber=false(代表可以首字符不可以是数字)
        if (starPatt.test(value[0])) {
          self.valiData.isNumber = false;
        }
        // 用于对格式进行长度、字符格式的校验
        self.validate(value, callback, "user");
      }
    };

    // 密码校验  value：为表单中输入的值          注意：密码第一个字符可以为数字  isNumber=true(代表可以首字符可以是数字)
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        self.valiData.isNumber = true; //用于对首字符进行检验     注意:data中访问数据用使用this
        self.validate(value, callback, "pass");
      }
    };

    // 对再次输入密码的校验
    var validateRepeatPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (self.ruleForm.pass != self.ruleForm.repeatpass) {
          callback(new Error("2次输入的密码不一样"));
        } else {
          self.valiData.isNumber = true; //用于对首字符进行检验     注意:data中访问数据用使用this
          self.validate(value, callback, "repeatpass");
        }
      }
    };

    return {
      // ruleForm:为表单数据对象--用于初次输入密码  重复输入密码不能和它共用一个不然两者的内容一样
      // 注意：props属性的值必须在ruleForm中配置
      ruleForm: {
        username: "",
        pass: "",
        repeatpass: "",
      },
      repeatPass: {
        // 用于存储重复输入密码
        pass: "",
      },
      // 用于对首字符进行检验
      valiData: {
        isNumber: true,
      },
      status: "",
      islegal: {
        //提交的时候要对3个都进行验证才可以成功
        user: false,
        pass: false,
        repeatpass: false,
      },
      // rules:表单验证规则 即（只负责对数据的格式进行校验）
      rules: {
        // 用户名校验规则    blur：当表单失去焦点时
        username: [{ validator: validateUsername, trigger: "blur" }],
        // 密码校验规则
        pass: [{ validator: validatePass, trigger: "blur" }],
        //重复密码的校验规则
        // 注意：props属性的值必须在ruleForm中配置   否则该规则无效 即 前面的属性repeatpass对应props的值
        repeatpass: [{ validator: validateRepeatPass, trigger: "blur" }],
      },
      //样式设置
      aStyle: {
        color: "rgb(201, 20, 20)",
      },
    };
  },
  methods: {
    // 提交按钮
    submitForm(formName) {
      const that = this;
      // validate:对整个表单进行校验的方法       valid=true:代表所有数据格式检验成功  valid=false:代表有错误的红色字体提示
      that.$refs[formName].validate((valid) => {
        // 即如果输入的数据格式都合法就添加数据
        if (valid) {
          that
            .RequestMessage("/spring/adduser", that.ruleForm)
            .then((res) => {
              console.log(res);
              //将添加成功的status存入data的属性status中
              that.status = res.data.status;
              if (that.status == "success") {
                that.$message({
                  showClose: true,
                  message: "恭喜你，注册成功!",
                  type: "success",
                });
                //重定向到登录界面
                that.$router.push("/login");
              }
            })
            .catch((err) => {
              console.log("添加失败！");
              console.log(err);
              this.$message({
                showClose: true,
                message: "注册失败,可能是数据库异常,请重新注册!",
                type: "error",
              });
            });
        } else {
          this.$message({
            showClose: true,
            message: "注册失败，请重新注册！可能是数据格式校验不正确",
            type: "error",
          });
        }
        // 用于向数据库添加数据
      });
    },
    // 重置按钮
    // 注意：如果要重置表单 必须表单的所哟props属性值都必须在ruleForm中配置
    resetForm(formName) {
      // resetFields：对整个表单进行重置
      this.$refs[formName].resetFields();
    },
    // 用于对用户名和密码进行校验的函数
    //   value:为表单数值  callback为data中回调函数
    validate(value, callback, name) {
      // 对用户名进行格式校验   3<=长度<=15
      if (this.valiData.isNumber && value.length >= 3 && value.length <= 15) {
        // 用于判断数据是否满足格式要求
        for (i = 0; i < value.length; i++) {
          if (patt.test(value[i])) continue;
          // 如果不合法
          else {
            callback(new Error("只能包含[0-9]/大小写字母/$/@等字符"));
          }
        }
        if (i == value.length) {
          callback();
        }
      } else {
        if (
          !this.valiData.isNumber &&
          3 <= value.length <= 15 &&
          name == "user"
        ) {
          callback(new Error("首字符不能是数字"));
        } else {
          callback(new Error("字符个数要>=3"));
        }
      }
    },
  },
  mounted() {},
};
</script>

<style lang='less'  scoped>
.login {
  border: 1px solid white;
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
    top: 43.5%;
  }
  .pass_1 {
    position: absolute;
    left: 39%;
    top: 53.6%;
  }
  .pass_1 img {
    height: 35px;
    width: 35px;
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