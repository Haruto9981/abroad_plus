import { css } from '@emotion/react'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Button,
  Modal,
  Card,
  CardContent,
  IconButton,
  Divider,
  TextField,
  Avatar,
  Typography,
  Tooltip,
  Stack,
} from '@mui/material'
import Popover from '@mui/material/Popover'
import axios, { AxiosResponse, AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import ProfileHoverCard from '@/components/ProfileHoverCard'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'

type diaryIdProps = {
  id: string
}

type CommentProps = {
  id: number
  comment: string
  userId: number
  fromToday: string
  user: {
    id: number
    name: string
    first_name: string
    last_name: string
    country: string
    uni: string
    bio: string
    image: {
      url: string
    }
  }
  onDelete: (commentId: number) => void
}

type CommentFormData = {
  comment: string
}

const imageCss = css({ marginTop: '4px' })

const CommentCard = (props: CommentProps) => {
  const [user] = useUserState()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [commentId, setCommentId] = useState<number>(0)


  const handleOpen = (id: number) => {
    setOpen(true)
    setCommentId(props.id)
  }

  const handleClose = () => {
    setOpen(false)
    setCommentId(0)
  }


  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const timeout = setTimeout(() => {
      setAnchorEl(event.currentTarget ?? event.target)
    }, 500)
    setHoverTimeout(timeout)
  }

  const handleHoverEnd = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleUnhover = () => {
    setAnchorEl(null)
  }

  return (
    <>
       
      
          
            <Divider sx={{ mt: 2 }} />
            <Box  sx={{ display: 'flex', mt: 1 }}>
              <Link href={`/${props.user.name}`}>
                <IconButton
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                >
                  {props.user.image.url ? (
                    <Avatar
                      src={props.user.image.url}
                      sx={{ width: 40, height: 40 }}
                    ></Avatar>
                  ) : (
                    <Avatar sx={{ width: 40, height: 40 }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                </IconButton>
              </Link>
              <Box sx={{ width: '100%', mt: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Link href={`/${props.user.name}`}>
                      <Typography
                        sx={{
                          mr: 1,
                          fontSize: 15,
                          fontWeight: 'bold',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverEnd}
                      >
                        @{props.user.name}
                      </Typography>
                    </Link>
                    <Link href={`/${props.user.name}`}>
                      <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <ProfileHoverCard
                          userId={props.user.id}
                          userName={props.user.name}
                          userFirstName={props.user.first_name}
                          userLastName={props.user.last_name}
                          userCountry={props.user.country}
                          userUni={props.user.uni}
                          userBio={props.user.bio}
                          userImage={props.user.image.url}
                          handleClose={handleUnhover}
                        />
                      </Popover>
                    </Link>
                    {props.user.country && (
                      <Tooltip title={props.user.country}>
                        <Image
                          css={imageCss}
                          src={`/${props.user.country.toLowerCase()}.png`}
                          height={15}
                          width={30}
                          alt="国旗"
                        />
                      </Tooltip>
                    )}
                    {props.user.uni && (
                      <Box sx={{ mx: 1 }}>
                        <Tooltip title={props.user.uni}>
                          <Image
                            src={`/${props.user.uni.toLowerCase()}.png`}
                            height={22}
                            width={22}
                            alt="Uni flag"
                          />
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: 'gray', fontSize: 12 }}>
                    {props.fromToday}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography sx={{ ml: 1 }}>{props.comment}</Typography>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              {props.userId === user.id && (
                <>
                  <IconButton onClick={() => handleOpen(props.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </Box>
            <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '0.5px solid #000',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography sx={{ mb: 4 }}>
              Do you really want to delete it?
            </Typography>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ marginRight: 2 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => props.onDelete(props.id)}
            >
              OK
            </Button>
          </Box>
        </Modal>
    </>
  )
}

export default CommentCard
