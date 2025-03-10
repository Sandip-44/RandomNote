<script setup lang="ts">
// import Breadcrumb from "primevue/breadcrumb";
import { PushpinFilled, RightCircleOutlined } from "@ant-design/icons-vue";

definePageMeta({
  //   middleware: "auth",
});

const home = ref({
  icon: "pi pi-home",
});
const items = ref([{ label: "Dashboard" }, { label: "Home" }]);

const value = ref("");
const onSearch = (searchValue) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
</script>

<template>
  <section>
    <a-row style="margin: 50px">
      <a-col :span="4" :offset="2">
        <a-button width="100px">New note</a-button>
      </a-col>
      <a-col :md="8">
        <a-input-search
          v-model:value="value"
          placeholder="whats going on ..... type here!"
          style="h-24"
          @search="onSearch"
          size="large"
        />
      </a-col>
      <a-col span="24" class="mt-10 text-center">
        <h1 class="text-medium">Take a look and Review your notes</h1>
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }">
        <a-card class="bg-yellow-400 h-64">
          <PushpinFilled
            height="5em"
            :style="{ fontSize: '20px', color: '#08c' }"
            class="flex justify-center"
          />
          <h3 class="text-lg font-bold mb-2 text-center">Web Fundamentals</h3>
          <ul>
            <li>
              <RightCircleOutlined />
              Master responsive web design
            </li>
            <li>
              <RightCircleOutlined />
              Learn modern CSS frameworks
            </li>
            <li>
              <RightCircleOutlined />
              Study JavaScript fundamentals
            </li>
            <li>
              <RightCircleOutlined />
              Practice UI/UX principles
            </li>
            <li>
              <RightCircleOutlined />
              Explore web accessibility
            </li>
          </ul>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 5, offset: 1 }">
        <a-card class="bg-orange-400 h-64">
          <PushpinFilled
            height="5em"
            :style="{ fontSize: '20px', color: '#08c' }"
            class="flex justify-center"
          />
          <h3 class="text-lg font-bold mb-2 text-center">
            Frontend Development
          </h3>
          <ul>
            <li>
              <RightCircleOutlined />
              Master Vue.js and its ecosystem
            </li>
            <li>
              <RightCircleOutlined />
              Learn TypeScript in depth
            </li>
            <li>
              <RightCircleOutlined />
              Explore state management solutions
            </li>
            <li>
              <RightCircleOutlined />
              Study component design patterns
            </li>
            <li>
              <RightCircleOutlined />
              Practice test-driven development
            </li>
          </ul>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }">
        <a-card class="bg-red-400 h-64">
          <PushpinFilled
            height="5em"
            :style="{ fontSize: '20px', color: '#08c' }"
            class="flex justify-center"
          />
          <h3 class="text-lg font-bold mb-2 text-center">
            Backend Development
          </h3>
          <ul>
            <li>
              <RightCircleOutlined />
              Learn database design principles
            </li>
            <li>
              <RightCircleOutlined />
              Master SQL and NoSQL databases
            </li>
            <li>
              <RightCircleOutlined />
              Study API design best practices
            </li>
            <li>
              <RightCircleOutlined />
              Understand authentication flows
            </li>
            <li>
              <RightCircleOutlined />
              Practice security implementations
            </li>
          </ul>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }">
        <a-card class="bg-lime-400 h-64">
          <PushpinFilled
            height="5em"
            :style="{ fontSize: '20px', color: '#08c' }"
            class="flex justify-center"
          />
          <h3 class="text-lg font-bold mb-2 text-center">
            System Architecture
          </h3>
          <ul>
            <li>
              <RightCircleOutlined />
              Study system architecture
            </li>
            <li>
              <RightCircleOutlined />
              Learn scalability patterns
            </li>
            <li>
              <RightCircleOutlined />
              Master microservices concepts
            </li>
            <li>
              <RightCircleOutlined />
              Explore cloud-native development
            </li>
            <li>
              <RightCircleOutlined />
              Practice DevOps methodologies
            </li>
          </ul>
        </a-card>
      </a-col>
    </a-row>
  </section>
</template>
