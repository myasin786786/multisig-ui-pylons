import { getValueFromDenom, getDisplayDenom } from "../../../libs/stringConvert"
import { motion } from "framer-motion"

const style = {
    label: {
        width: "20%",
        textAlign: "center",
        fontWeight: "bold",
        padding: '1em'
    },
    value: {
        width: "80%",
        padding: '1em'
    }
}

const RedelegateMsg = ({ chain, parentStyle, msg }) => {
    return (
        <>
            <div
                style={{
                    ...parentStyle.flexRow,
                    marginBottom: 0,
                    borderBottom: 'solid .5px white'
                }}
            >
                <motion.label
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.label
                    }
                >
                    Amount:
                </motion.label>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.value
                    }
                >
                    {`${getValueFromDenom(msg.value.amount.denom, msg.value.amount.amount)} `}
                    {getDisplayDenom(msg.value.amount.denom).toUpperCase()}
                </motion.div>
            </div>
            <div
                style={{
                    ...parentStyle.flexRow,
                    marginBottom: 0,
                    borderBottom: 'solid .5px white'
                }}
            >
                <motion.label
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.label
                    }
                >
                    From:
                </motion.label>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.value
                    }
                >
                    <a
                        href={`${chain.valExplorer}${msg.value.validatorSrcAddress}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {msg.value.validatorSrcAddress}
                    </a>
                </motion.div>
            </div>
            <div
                style={{
                    ...parentStyle.flexRow,
                    marginBottom: 0,
                    borderBottom: 'solid .5px white'
                }}
            >
                <motion.label
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.label
                    }
                >
                    To:
                </motion.label>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    style={
                        style.value
                    }
                >
                    <a
                        href={`${chain.valExplorer}${msg.value.validatorDstAddress}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {msg.value.validatorDstAddress}
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default RedelegateMsg