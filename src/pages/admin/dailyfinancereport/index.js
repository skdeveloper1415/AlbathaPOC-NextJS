
import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layoutAdmin/layoutdailyfinancereport/layout";

const Index = () => {
  

  return (
    <Layout 
      pageTitle="Summary" 
      pageName="Summary"
    >
      <FilterComponent />
    </Layout>
  );
};

export default Index;
