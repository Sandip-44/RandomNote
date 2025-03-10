<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <img
        src="../public/logo/logo1.png"
        height="130px"
        width="130px"
        alt="loading failed"
      />

      <h1 class="text-3xl poppins-medium">Welcome Back</h1>
      <p class="text-sm poppins-semibold">
        Don't have an account?Create today!
      </p>
    </div>

    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :layout="formStates.layout"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>
        <a class="login-form-forgot" href="">Forgot password</a>
      </a-form-item>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          label="Error"
          severity="danger"
        >
          Log in
        </a-button>
        Or
        <a href="">register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";

const { $supabase } = useNuxtApp();

const router = useRouter();

const formStates = reactive({
  layout: "vertical",
});
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  const response = $supabase.auth
    .signInWithPassword({
      email: values.username,
      password: values.password,
    })
    .then(() => {
      console.log(response);
      notification["success"]({
        message: "Welcome back!",
      });
      router.push("/dashboard/home");
    })
    .catch((error) => {
      notification["error"]({
        message: "Something went wrong",
        description: "Please check your username and password.",
      });
    });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
<style scoped>
.ant-form-item-label > label {
  /* font-family: "Poppins", sans-serif; */
  font-weight: 600; /* Semibold */
  font-size: 1.875rem !important; /* Text size equivalent to text-3xl */
}
</style>
