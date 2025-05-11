import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  IconButton,
  Tooltip,
  Icon,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { SolanaProvider } from "../components/SolanaProvider/SolanaProvider";
import { Staking } from "../components/Staking/Staking";
import { StakingInfoModal } from "../components/StakingHelp/StakingInfoModal";
import { Widgets } from "../components/Widgets/Widgets";
import { StakingContext } from "../contexts/StakingContext";
import styles from "../styles/Home.module.css";
import theme from "../themes/theme";
import { useIndex } from "../hooks/index.hooks";

const stakingTheme = createTheme(theme);

const Home: NextPage = () => {
  const { apr, endpoint, connection } = useIndex();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when the page loads
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <ThemeProvider theme={stakingTheme}>
      <CssBaseline />
      <Head>
        <title>Solana Staking Finance</title>
        <meta
          name="description"
          content="The best risk-free yields on Solana."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <Box className={styles.header}>
          <Typography variant="h4" fontWeight={700} component="h1">
            Solana Staking Finance
          </Typography>
        </Box>

        <SolanaProvider endpoint={endpoint}>
          <StakingContext.Provider
            value={{ apr, connection, stakedToken: "xSOL" }}
          >
            <Widgets />

            <Box sx={{ my: 4, textAlign: "center", position: "relative" }}>
              <Typography
                className={styles.title}
                variant="h3"
                component="h2"
                fontWeight={800}
                fontSize={{ xs: 32, md: 40 }}
              >
                Stake SOL and Earn {apr.toFixed(2)}% APY
                <Tooltip title="Learn how staking works">
                  <IconButton
                    onClick={handleOpenModal}
                    size="small"
                    sx={{
                      ml: 1,
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "rgba(20, 241, 149, 0.1)",
                      },
                    }}
                  >
                    <Icon fontSize="small">info_outline</Icon>
                  </IconButton>
                </Tooltip>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Secure, non-custodial staking on Solana
              </Typography>
            </Box>

            <Container maxWidth="md" className={styles.container}>
              <Staking />
            </Container>

            {/* Staking Info Modal */}
            <StakingInfoModal open={modalOpen} onClose={handleCloseModal} />
          </StakingContext.Provider>
        </SolanaProvider>
      </main>
    </ThemeProvider>
  );
};

export default Home;
