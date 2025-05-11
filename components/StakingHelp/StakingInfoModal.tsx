import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  Icon,
} from "@mui/material";

interface StakingInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const StakingInfoModal: React.FC<StakingInfoModalProps> = ({
  open,
  onClose,
}) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: "rgba(22, 27, 41, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <DialogTitle
        sx={{
          pb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div" fontWeight={700}>
          How Does Solana Staking Work?
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Icon>close</Icon>
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            What is Staking?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Staking allows users to participate in securing the Solana network
            by delegating SOL tokens to validators. In return, you earn rewards
            in the form of additional SOL tokens, currently at{" "}
            {/* APY will be passed from context */}~6-7% APY.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            Benefits of Staking
          </Typography>
          <Typography component="div">
            <ul style={{ paddingLeft: "20px" }}>
              <li>Earn passive income on your SOL holdings</li>
              <li>
                Support the security and decentralization of the Solana network
              </li>
              <li>No lock-up period - unstake at any time</li>
              <li>
                Choose between instant unstaking (with fee) or delayed unstaking
                (no fee)
              </li>
            </ul>
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            How to Get Started
          </Typography>
          <Typography component="div">
            <ol style={{ paddingLeft: "20px" }}>
              <li>
                Connect your Solana wallet using the &quot;Connect Wallet&quot;
                button
              </li>
              <li>Enter the amount of SOL you want to stake</li>
              <li>Confirm the transaction in your wallet</li>
              <li>Start earning rewards immediately!</li>
            </ol>
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #14F195 0%, #9945FF 100%)",
            boxShadow: "0px 4px 12px rgba(20, 241, 149, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #0ba76a 0%, #7a31d4 100%)",
              boxShadow: "0px 6px 16px rgba(20, 241, 149, 0.3)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Start Staking
        </Button>
      </DialogActions>
    </Dialog>
  );
};
