import {
  Tabs,
  Tab,
  TabPanel,
  TabIndicator,
  TabList,
  TabPanels
} from "@chakra-ui/react"


import PageLayout from "../../../components/PageLayout/PageLayout"
import TabListConfiguracoes from "../components/TabListConfiguracoes"
import FormMsgTitAVencerEmail from "./components/titulos-a-vencer/FormMsgTitAVencerEmail"
import FormConfigServidorSMTP from "./components/titulos-a-vencer/FormConfigServidorSMTP"


const ConfigEnvioEmail = () => {


  return (
    <PageLayout>

      <TabListConfiguracoes />

      <Tabs bg='white' boxShadow='base' marginTop={5}>
        <TabList justifyContent='center'>
          <Tab>Cobrança</Tab>
          <Tab>Titulos a vencer</Tab>
          <Tab>Titulos vencidos</Tab>
          <Tab>Promoções</Tab>
          <Tab>Anivesário</Tab>
          <Tab>Marketing</Tab>
          <Tab>Gestor</Tab>
        </TabList>

        <TabPanels>

          {/* Cobrnaça */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>

          {/*Titulos a Vencer */}
          <TabPanel>
            <FormConfigServidorSMTP/>
            <FormMsgTitAVencerEmail/>
          </TabPanel>

          {/*Titulos Vencidos*/}
          <TabPanel>
            <p>three!</p>
          </TabPanel>

          {/*Promoções*/}
          <TabPanel>
            <p>three!</p>
          </TabPanel>

        </TabPanels>
      </Tabs>

    </PageLayout>
  )
}

export default ConfigEnvioEmail