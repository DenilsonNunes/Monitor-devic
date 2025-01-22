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
import ConfiguracaoCobranca from "./cobranca/ConfiguracaoCobranca"


const HomeConfigEnvioEmail = () => {


  return (
    <PageLayout>

      <TabListConfiguracoes />

      <Tabs bg='white' boxShadow='base' marginTop={5}>

        <TabList justifyContent='center'>
          <Tab>Cobrança</Tab>
          <Tab>Titulos a vencer</Tab>
          <Tab>Titulos vencidos</Tab>
          <Tab>Promoções</Tab>
          <Tab>Aniversário</Tab>
          <Tab>Marketing</Tab>
          <Tab>Gestor</Tab>
        </TabList>




        <TabPanels>

          {/* Cobranaça */}
          <TabPanel>
            <ConfiguracaoCobranca/>
          </TabPanel>

          {/*Titulos a Vencer */}
          <TabPanel>
          <p>Titulos a vencer</p>
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

export default HomeConfigEnvioEmail