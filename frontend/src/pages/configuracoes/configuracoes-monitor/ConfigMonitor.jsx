import { 
    Box,
    Text
  } from "@chakra-ui/react"
import PageLayout from "../../../components/PageLayout/PageLayout"
import TabListConfiguracoes from "../components/TabListConfiguracoes"


const ConfigMonitor = () => {


  return (
    <PageLayout>
        <TabListConfiguracoes/>
        <Text>Configuracoes do monitor</Text>
    </PageLayout>
  )
}

export default ConfigMonitor