<template>
  <va-stepper v-model="step" :steps="steps" color="danger" controls-hidden>
    <template #divider>
      <div class="divider gradient" />
    </template>

    <template v-for="(step, i) in steps" :key="step.label" #[`step-button-${i}`]="{ setStep, isActive, isCompleted }">
      <div
        class="step-button"
        :class="{
          'step-button--active': isActive,
          'step-button--completed': isCompleted,
        }"
        @click="setStep(i)"
      >
        <va-icon :name="step.icon" />
        {{ step.label }}
      </div>
    </template>

    <template #step-content-0>
      <div class="form-elements">
        <div class="row">
          <div class="flex md4 sm6 xs12" style="max-width: 300px">
            <form>
              <va-input v-model="value" class="mb-6 md4 sm6" label="name" placeholder="Device Name" />
              <va-input v-model="value" class="mb-6 md4 sm6" label="address" placeholder="Device Address" />
              <va-input v-model="value" class="mb-6 md4 sm6" label="type" placeholder="Device Type" />
            </form>
          </div>
        </div>
      </div>
    </template>

    <template #step-content-1>
      <div class="form-elements">
        <div class="row">
          <div class="flex xs12">
            <form>
              <div class="row">
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="simple" placeholder="Text Input" />
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="withIcon" placeholder="Input your email">
                    <template #prepend>
                      <va-icon color="gray" name="mail_outline" />
                    </template>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="withButton" placeholder="Input With Button">
                    <template #append>
                      <va-button style="margin-right: 0" small> UPLOAD </va-button>
                    </template>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="successfulEmail" type="email" label="Email (Validated with success)" success>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="clearableText" placeholder="Input With Clear Button" clearable />
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input
                    v-model="wrongEmail"
                    type="email"
                    label="Email (Validated)"
                    error
                    :error-messages="errorMessages"
                  >
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input
                    v-model="withDescription"
                    placeholder="Text Input (with description)"
                    :messages="messages"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>

    <template #step-content-2>
      <p>Success Post</p>
    </template>

    <template #controls="{ nextStep, prevStep, setStep }">
      <div class="stepper-button">
        <va-button color="info" class="mr-6 mb-2" @click="prevStep()">Previous</va-button>
        <va-button color="info" class="mr-6 mb-2" @click="nextStep()">Next</va-button>
        <va-button color="info" class="mr-6 mb-2" @click="setStep(steps.length - 1)">Go to last step</va-button>
      </div>
    </template>
  </va-stepper>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { VaStepper, VaIcon } from 'vuestic16'

  const step = ref(0)

  const steps = [
    { label: 'Fill Basic Info', icon: 'components' },
    { label: 'Setup Responsible', icon: 'select_all' },
    { label: 'Confirm and Finish', icon: 'done' },
  ]

  import CountriesList from './data/CountriesList'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const countriesList = ref(CountriesList)
  const chosenCountry = ref('')
  const simple = ref('')
  const withIcon = ref('')
  const withButton = ref('')
  const withDescription = ref('')
  const clearableText = ref('Vasili Savitski')
  const successfulEmail = ref('andrei@dreamsupport.io')
  const wrongEmail = ref('andrei@dreamsupport')
  const messages = ref([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
      'incididunt ut labore et dolore magna aliqua.',
  ])
  const errorMessages = ref(['Field should contain a valid email'])
  const simpleOptions = ref([
    {
      id: 1,
      description: 'First option',
    },
    {
      id: 2,
      description: 'Second option',
    },
    {
      id: 3,
      description: 'Third option',
    },
  ])

  const value = ''
</script>

<style scoped>
  .gradient {
    background: linear-gradient(90deg, rgb(131, 58, 180) 0%, rgb(253, 29, 29) 50%, rgb(241, 170, 48) 100%);
  }

  .divider {
    flex-grow: 1;
    margin: 0 1rem;
    height: 2px;
    width: 2rem;
    border-radius: 1rem;
  }

  .step-button {
    display: flex;
    gap: 1rem;
    color: rgb(241, 170, 48);
    cursor: pointer;
    padding: 1rem;
    transition: all 0.2s;
  }

  .step-button:hover {
    color: rgb(253, 29, 29);
  }

  .step-button--active {
    color: rgba(253, 29, 29);
  }

  .step-button--completed {
    color: rgb(131, 58, 180);
  }

  va-button {
    color: black;
    background-color: black;
  }

  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
